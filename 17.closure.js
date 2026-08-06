//* Closure - when a outer function return another inner function even after the execution of outer function has finished the inner function still has the access of the outer function variables because the inner function makes a closure around the lexically scoped variables

function outer(){
  console.log("Execution of Outer Function: Start")
  let outerVar = "This is from outer function"
  function inner(){
    console.log("Execution of Inner Function: Start")
    let innerVar = "This is from inner function"
    console.log(innerVar)
    console.log(outerVar)
    console.log("Execution of Inner Function: End")
  }
  console.log("Execution of Outer Function: End")
  return inner
}

let res = outer()
res()


function counter(){
  let count = 0
  function increment(){
    count += 1
    console.log(count)
  }
  return increment
}

let counterA = counter()
counterA() // 1
counterA() // 2
counterA() // 3

let counterB = counter()
counterB() // 1
counterB() // 2
