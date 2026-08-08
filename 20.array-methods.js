let numbers = [10,20,30,40,50]
console.log("Main Array: ",numbers)

// Adding a element at the last of an array
numbers.push(60)
console.log(numbers)

// Adding a element at the first of an array
numbers.unshift(0)
console.log(numbers)

// Removing the last element of an array
let lastElement = numbers.pop() //* pop method returns a value
console.log(lastElement)
console.log(numbers)

// Removing the first element of an array
let firstElement = numbers.shift() //* shift method returns a value
console.log(firstElement)
console.log(numbers)

//* Splice Method - splice(startIndex,deleteCount,items)
//* splice method always returns an array

// Removing a element in a specific position
let middleElement = numbers.splice(2,1)
console.log(middleElement)
console.log(numbers)

// Adding a element in a specific position
numbers.splice(2,0,30)
console.log(numbers)

// Replacing elements
let replacedElement = numbers.splice(0,numbers.length,1,2,3,4,5)
console.log(replacedElement)
console.log(numbers)

// Find a index of a element
let index1 = numbers.indexOf(1)
console.log(index1)

numbers.push(1)

let lastIndex1 = numbers.lastIndexOf(1)
console.log(lastIndex1)

console.log(numbers.indexOf(50)) // -1
//* If a element does not exist in a array it will give the indexof value -1

// Check if a element does exist or not in a array
console.log(numbers.includes(2)) // true

// map method
let squares = [1,4,9,16,25]
let squareRoot = squares.map(x => Math.sqrt(x))
console.log(squareRoot)

// filter method
let marks = [77,89,98,32,67]
let gradeA = marks.filter(x => x >= 80)
console.log(gradeA)

// reduce method
let totalMarks = marks.reduce((total,current) => total + current, 0)
console.log(totalMarks)

// some method
let hasGradeA = marks.some(x => x >= 90)
console.log(hasGradeA)

// every method
let hasEveryPassed = marks.every(x => x >= 33)
console.log(hasEveryPassed)

let highestMark = marks.find( x => x >= 90)
console.log(highestMark)

// sort method
// ascending
marks.sort((a,b) => a - b)
console.log(marks)

// descending
marks.sort((a,b) => b - a)
console.log(marks)
