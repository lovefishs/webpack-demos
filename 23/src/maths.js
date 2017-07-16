// 这个函数没有被其他地方引用过
export const square = function (x) {
  return x * x;
}

// 这个函数被引用了
export const cube = function (x) {
  return x * x * x
}
