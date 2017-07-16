import React from 'react'

import Header from 'components/Header'
import Footer from 'components/Footer'
import Counter from 'components/Counter'

const App = () => {
  return (
    <div>
      <p>before info</p>

      <Header />
      <Counter />
      <Footer />

      <p>after info</p>
    </div>
  )
}

export default App
