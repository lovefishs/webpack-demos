const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')

const hostname = '127.0.0.1'
const port = 3000

// maps file extention to MIME typere
const extMap = {
  '.ico': 'image/x-icon',
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.wav': 'audio/wav',
  '.mp3': 'audio/mpeg',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.doc': 'application/msword',
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url) // parse URL
  let pathname = `.${parsedUrl.pathname}` // extract URL path
  // based on the URL path, extract the file extention. e.g. .js, .doc, ...
  let ext = path.parse(pathname).ext
  const acceptEncoding = req.headers['accept-encoding'] ? req.headers['accept-encoding'] : ''

  // console.log(`req.method: ${req.method}`)
  // console.log(`req.url: ${req.url}`)
  // console.log(`pathname: ${pathname}`)
  // console.log(`ext: ${ext}`)

  fs.exists(pathname, (exist) => {
    if (!exist) {
      // if the file is not found, return 404
      res.writeHead(404, { 'Content-Type': 'text/plain' })
      res.end(`File ${pathname} not found!`)

      return
    }

    // if is a directory search for index file matching the extention
    if (fs.statSync(pathname).isDirectory()) {
      ext = ext === '' ? '.html' : ext
      pathname += `/index${ext}`
    }

    if (acceptEncoding && ext === '.js') {
      fs.readFile(`${pathname}.gz`, (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' })
          res.end(`Error getting the gz file: ${err}.`)
        } else {
          /*if (/\bdeflate\b/.test(acceptEncoding)) {
            res.writeHead(200, { 'Content-Type': (extMap[ext] || 'text/plain'), 'Content-Encoding': 'deflate' })
            res.end(data)
          } else */
          if (/\bgzip\b/.test(acceptEncoding)) {
            res.writeHead(200, { 'Content-Type': (extMap[ext] || 'text/plain'), 'Content-Encoding': 'gzip' })
            res.end(data)
          } else {
            res.writeHead(200, { 'Content-Type': (extMap[ext] || 'text/plain') })
            res.end(data)
          }
        }
      })
    } else {
      // read file from file system
      fs.readFile(pathname, (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' })
          res.end(`Error getting the file: ${err}.`)
        } else {
          // if the file is found, set Content-type and send data
          res.writeHead(200, { 'Content-type': (extMap[ext] || 'text/plain') })
          res.end(data)
        }
      })
    }
  })
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
