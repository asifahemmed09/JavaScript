let sym = Symbol("identifier")

console.log(sym)
console.log(typeof sym)

let id1 = Symbol("id")
let id2 = Symbol("id")

console.log(id1 === id2) //false

let i1 = Symbol("student")
let i2 = Symbol("student")

let myObj = {
  [i1]: "John",
  [i2]: "Jane",
  "institution": "MIT"
}

console.log(myObj)
console.log(myObj[i1])
console.log(myObj[i2])
// console.log(myObj.i1) //! Can not get Symbol with (.) syntax in a object

//* Symbols can not get through for in loop
for(let key in myObj){
  console.log("Key:",key, ",", "value: ",myObj[key])
}


