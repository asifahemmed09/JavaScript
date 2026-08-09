let user = {
  name: "John Doe",
  age: 24,
  "is admin": false
}

// Accessing objects value with (.) notation
console.log(user.name) // John Doe
console.log(user.age) // 24

// Accessing objects value with subscript notation
console.log(user["is admin"]) // false

// Creating a key value pair with (.) notation
user.isSeniorCitizen = user.age > 65 ? true : false
console.log(user.isSeniorCitizen) // false

// Creating a key value pair with subscript notation
user["is student"] = true
console.log(user["is student"]) // true

// Deleting a property
console.log(user)
delete user["is student"]
console.log(user)

// Creating Object using Constructor Function
function Car(brand,model){
  this.brand = brand
  this.model = model
}

let audi = new Car("Audi","A5")
let bmw = new Car("BMW","i7")
console.log(audi)
console.log(bmw)
console.log(audi instanceof Car) // true
console.log(bmw instanceof Car) //true

// Creating Object using Object Constructor
let person = new Object()
person.name = "Harry"
person.age = 20
console.log(person)

// Creating Object using Factory Function
function createUser(name,age){
  return {
    name, //* Using shorthand name: name can be written name
    age //* Using shorthand age: age can be written name
  }
}

let user1 = createUser("James", 25)
console.log(user1)

// Object Methods
let bird = {
  name: "Crow",
  fly: function(){
    console.log("Crow is flying...")
  }
}
bird.fly()

// Checking for a key exists in a object
console.log("name" in bird) //true

// for in loop
for(let key in user){
  console.log("Key: ",key)
  console.log("Value: ",user[key])
}

// Getting object keys
let userKeys = Object.keys(user)
console.log(userKeys)

// Getting object key's values
let userValues = Object.values(user)
console.log(userValues)

// Getting object entries
let userEntries = Object.entries(user)
console.log(userEntries)

// Object Destructuring
let {name, age} = person
console.log(name,age)


