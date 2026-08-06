//* Scope Chain - inner scope is related to outer scope and build a chain through all scopes
//* Inner scope can access outer scope's variables
//* Outer scope can not access inner scope's variables

let globalVar = 'This is global variable';

function outer() {
  let outerVar = 'This is outer variable';
  // console.log(innerVar); //* can not access because this variable is in the child scope
  console.log(outerVar);
  console.log(globalVar);
  function inner() {
    let innerVar = 'This is inner variable';
    console.log(innerVar);
    console.log(outerVar);
    console.log(globalVar);
  }
  inner();
}

// console.log(innerVar); //* can not access because this variable is in the child scope
// console.log(outerVar); //* can not access because this variable is in the child scope
console.log(globalVar);

outer();
