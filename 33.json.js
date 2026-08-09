//* JSON - JavaScript Object Notation

let user = {
  name: "John Doe",
  age: 24,
  isStudent: true
}

// Converts object to JSON
let userJSON = JSON.stringify(user)
console.log(userJSON)

// Converts JSON to object
let userObj = JSON.parse(userJSON)
console.log(userObj)
