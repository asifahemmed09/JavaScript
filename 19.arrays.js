let fruits = ["Banana","Apple","Kiwi","Strawberry","Avocado"]

// Accessing array element
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])
console.log(fruits[4])

// Array Constructor
let numbers = new Array(10)

// Length of an array
let length = numbers.length
console.log(length)

// Adding elements to array
for(let index = 0; index < length; index++){
  numbers[index] = index + 1
}

// Loop through an array
for(let i = 0; i < length; i++){
  console.log(numbers[i])
}

// for of loop
for(let fruit of fruits){
  console.log(fruit)
}
