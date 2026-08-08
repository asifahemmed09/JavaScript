let arr1 = [1,2,3,4]
console.log(arr1)

let arr2 = structuredClone(arr1)
console.log(arr2)

let arr3 = [[1,2],[3,4]]
console.log(arr3)

let arr4 = structuredClone(arr3)
console.log(arr4)

arr3[1].push(5)
console.log(arr3)

console.log(arr4)
