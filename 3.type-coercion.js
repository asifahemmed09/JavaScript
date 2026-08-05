// Equality Operator ( == )
//* Equality Operator only compare value
console.log(5 == "5") // true

// Strict Equality Operator ( === )
//* Strict Equality Operator compare both value and type
console.log(5 === "5") // false

//* When JS compares string with number it always implicitly converts string into number

console.log(1 == "1") // true
// 1 == Number("1") -> 1 == 1 -> true

//* When JS compares boolean with number it always implicitly converts boolean into number
console.log(true == 1) // true
// Number(true) == 1 -> 1 == 1 -> true

console.log(true == 55) // false
// Number(true) == 55 -> 1 == 55 -> false


//* When JS compares boolean with string it always implicitly converts boolean into number and also converts string into number than compare it

console.log(true == "John") // false
// Number(true) == Number("John") -> 1 == NaN -> false

console.log(true == "1") // true
// Number(true) == Number("1") -> 1 == 1 -> true


// Null and Undefined
console.log(null == undefined) // true
console.log(null === undefined) //false

// Empty String and Zero
console.log("" == 0) // true
//* Empty string always converts into 0 in Number type
console.log("" === 0) // false

// Boolean and Empty String
console.log(false == "") // true
console.log(true == "") // false

// Null and Boolean
console.log(null == false) // false
console.log(null == true) //false

// Undefined and Zero
console.log(undefined == 0) // false

// NaN comparisons
console.log(NaN == NaN) // false
console.log(NaN === NaN) // false
