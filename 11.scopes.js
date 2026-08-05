//* Scope -> Where the variables are accessible
/**
 * * - Global Scope -> can access form any where
 * * - Function Scope -> can only access within the function
 * * - Blocked Scope -> can only access within the block
 */

// * Var is function scoped
//* Let and Const are block scoped


let a  = 3 // global scoped variable
var b = 2 // global scoped variable

function printTillNumber(){
  let num = a + b // functional scoped variable
  for (let i = 1; i <= num; i++){
    console.log(i) // block scoped variable
  }
  for (var j = 1; j <= num; j++){
    console.log(j * j)
  }
  console.log(j) // 6
  console.log(num) // 5
  console.log(i) // ReferenceError
}
printTillNumber()

console.log(a) // 3
console.log(b) // 2
console.log(num) // ReferenceError


