//* Hoisting -  Moving all the declarations to top in creation phase of Execution Context

console.log(a) // undefined
var a = 10
console.log(a) // 10

// Hoisting in var
/**
 * var a = undefined;
 * console.log(a)
 * a = 10
 * console.log(a)
 */

//* var is hoisted and initialized with undefined

/**
 *  * Global Execution Context
 *  *   Creation Phase:  a = undefined -> initialized with undefined
 *  *   Execution Phase:
 *  *     console.log(a) -> print undefined
 *  *     a = 10 -> assigned with value 10
 *  *     console.log(a) -> print 10
 */


// console.log(b) // ReferenceError: Cannot access 'b' before initialization
// let b = 8 // does not executed
// console.log(b) // does not executed

// Hoisting in let
/**
 * let b;
 * console.log(b)
 * b = 10
 * console.log(b)
 */

//* let is hoisted and does not initialized

/**
 *  * Global Execution Context
 *  *   Creation Phase:  let b; -> does not initialized
 *  *   Execution Phase:
 *  *     console.log(a) -> Throw an error
 *  *     a = 10 -> // does not executed
 *  *     console.log(a) -> print 10 // does not executed
 */


greet() // "Welcome to JavaScript"
function greet(){
  console.log("Welcome to JavaScript")
}
// Hoisting in function
/**
 * function greet(){
  console.log("Welcome to JavaScript")
}
  greet()
*/

/**
 *  * Global Execution Context
 *  *    Creation Phase:  function greet declaration
 *  *    Execution Phase:
 *  *        greet() ->  creates Function Execution Context
 *  * Function Execution Context
 *  *   Creation Phase: there is no declaration
 *  *   Execution Phase:
 *  *      console.log("Welcome to JavaScript") -> print 
 */







