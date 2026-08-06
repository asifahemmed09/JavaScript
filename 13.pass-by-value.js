/**
 *  * Primitive Types
 *  *   - Number
 *  *   - Boolean
 *  *   - BIgInt
 *  *   - Undefined
 *  *   - Null
 *  *   - Symbol
 */

let num1 = 20;
let num2;

//* Pass by value
num2 = num1

console.log(num1) // 20
console.log(num2) // 20

num1 = 30

console.log(num1) // 30
console.log(num2) // 20

let hasPassport = true
let hasNationalID;
hasNationalID =  hasPassport

console.log(hasPassport) // true
console.log(hasNationalID) // true

hasPassport = false

console.log(hasPassport) // false
console.log(hasNationalID) // true
