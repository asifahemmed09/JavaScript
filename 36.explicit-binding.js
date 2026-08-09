let user = {
  name: "John Doe"
}

function greet(age){
  console.log(`${this.name} is ${age} years old`)

}

// call
greet.call(user,24)

function getHobbies(...hobbies){
    console.log(`${this.name} likes to play ${hobbies[0]} and ${hobbies[1]}`)
}
// apply
getHobbies.apply(user,["cricket","football"])


function calculate(a,b){
  return this.add = a + b
}
let add = calculate.bind({add: 0},5,5)
console.log(add())
