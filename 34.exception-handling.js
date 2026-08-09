let jsonStr = '{"user:"John"}'

// Handling Error
try {
  let userObj = JSON.parse(jsonStr)
  console.log(userObj)
} catch (error) {
  console.log("Error Name: ",error.name,"Error Message: ",error.message)
}

let a = 10
let b = 0
// Throwing Error
try {
  if(b === 0){
    throw new Error("Can not divide by zero");
  }
  let result = a / b
  console.log(result)
} catch (error) {
  console.log(error.message)
}

// Finally Block
try {
  let a = lsds
  console.log(a)
} catch (error) {
  console.log(error.message)
}
finally{
  console.log("No matter what I will be executed at the end")
}

