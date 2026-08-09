// "use strict"
// this in global scope
console.log(this) // {}
//* In Browser this in global scope refers to window object
//* In Browser this in global scope with strict mode refers to window object
//* In Node.js this in global scope refers to {}
//* In Node.js this in global scope with strict mode refers to {}

console.log(this === module.exports) // true

// this with object
let user = {
  name: "John Doe",
  age: 24,
  getDetails: function(){
    console.log(`${this.name} is ${this.age} years old`)
  }
}

//* When a method call this refers to the object in which with the method is called
user.getDetails()

// this inside a function
//* this refers to global object inside a function
//* this refers to undefined in strict mode inside a function
function logThis(){
  console.log(this)
}

logThis()

function outer(){
  function inner(){
    console.log(this)
  }
  return inner
}
let outerResult = outer()
outerResult()

// this inside arrow function
//* Arrow Function does not have own this
//* In arrow function this refers to the parent scope this of where the function is lexically scoped
let logThisInArrow = () => console.log(this) // {}
logThisInArrow()

let person = {
  name: "Jane",
  email: "jane@gmail.com",
  getThis: () => {
    console.log(this) // {}
  },
  getName: function(){
    return () => console.log(this.name)
  }
}
person.getThis()
let personName = person.getName()
personName()
