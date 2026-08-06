//* Object is first class citizen in JavaScript
//* Function is first class citizen in JavaScript
//* Function is a Object in JavaScript
/**
 * * First Class
 * *   - Can be stored in a variable
 * *   - Can be passed as a argument to a function
 * *   - Can be returned from a function
 */

// Storing in a variable
let person = {
  name: "John",
  age: 18
}

// Returning from a function
function getPerson(person){
  return person
}

// Passing as a argument
let result = getPerson(person)

console.log(result)

// * Function as a object
function add(a,b){
  console.log(a + b)
}

// Function has properties
console.log(add.name) // add
console.log(add.length) // 2

// Function has methods
add.call

//* Higher Order Function - A function which can take a function as a parameter
function logResult(fn){
  //* Call Back Function - A function which is passing as a argument to another function
  fn()
}


logResult(add)
