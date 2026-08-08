let arr1 = [1,2,3,4]
console.log(arr1)

// Copying by Spread Operator
let arr2 = [...arr1]
console.log(arr2)

// Copying by Slice Method
let arr3 = arr1.slice()
console.log(arr3)

arr1.push(5)
console.log(arr1)
console.log(arr2)
console.log(arr3)


let arr4 = [[1,2],[3,4]]
console.log(arr4)

let arr5 = arr4.slice()
console.log(arr5)

arr4[1].push(5)
console.log(arr4)

console.log(arr5)
