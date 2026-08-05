// Function without input and output
function logHello(){
  console.log("Hello")
}
logHello()

// Function without input and with output
function greet(){
  let message = "Welcome to JavaScript"
  return message
}
let message = greet()
console.log(message)


// Function with input and without output
function add(a,b){
  let total = a + b
  console.log(total)
}
add(3,5)

// Function with input and output
function getSquare(num){
  let square =  num * num
  return square
}

let square = getSquare(3)
console.log(square)


// Function Declaration
function sum(a,b){
  return a + b
}
console.log(add(5,5))

// Function Expression
const double = function(num){
  return num * 2
}
console.log(double(2))

// Arrow Function
const greeting = (name) => `Hello ${name}`
console.log(greeting("John"));

// IIFE - Immediately Invoked Function
(
  function(){
    console.log("JavaScript is running...")
  }
)();


