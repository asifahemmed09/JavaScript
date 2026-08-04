//* Data Types
/*
* Number
* BigInt
* String
* Boolean
* Undefined
* Null
* Symbol
*/

// Number Data Type
let age = 25
console.log(age)
console.log(typeof age)

let positiveInfinity = 1 / 0
console.log(positiveInfinity)
console.log(typeof positiveInfinity)

let negativeInfinity = - 1 / 0
console.log(negativeInfinity)
console.log(typeof negativeInfinity)

let notNumber = "Hello" / 2
console.log(notNumber)
console.log(typeof notNumber)

//* Infinity, -Infinity, NaN are Number data type

// BigInt Data Type

let bigNum1 = 100n
let bigNum2 = 200n

console.log(bigNum1)
console.log(typeof bigNum1)

//* Arithmetic operation between two BigInt are possible
console.log(bigNum1 + bigNum2)

//! Arithmetic operation between BigInt and Number will give an error
// console.log(bigNum1 + age)

// String Data Type
let name = "John Doe"
console.log(name)
console.log(typeof name)

// Boolean Data Type
let hasPassport = true
console.log(hasPassport)
console.log(typeof hasPassport)

// Undefined Data Type
let data;
console.log(data)
console.log(typeof data)

