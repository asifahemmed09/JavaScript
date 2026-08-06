//* Callback Function - A function passed as a argument to another function

function circle(radius){
  return Math.PI * radius * radius
}

function square(side){
  return side * side
}

function calculateArea(value,shape){
  return shape(value)
}

let squareArea = calculateArea(2, square)
let circleArea = calculateArea(2, circle)

console.log(squareArea)
console.log(circleArea)
