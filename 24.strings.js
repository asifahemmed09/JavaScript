//* Strings are created in Heap Memory
//* In Heap Memory there is String Pool where strings are created
//* String Interning - When a string is creating first it checks in the string pool if there is same string in the string pool no strings is created rather it reference the old string address else it creates a new string on the string pool
//* Strings are immutable

// String with double quotes
let hello = "Hello"
console.log(hello)
// String with single quotes
let name = 'John'
console.log(name)
// String with backticks or Template Literals
let message = `${hello} ${name}`
console.log(message)


let str1 = "JavaScript"
let str2 = "javascript"
//* Strings are case sensitive
console.log(str1 == str2) // false

let str3 = "JavaScript"
console.log(str1 == str3) // true
console.log(str1 === str3) // true

// String with class
let str4 = new String("JavaScript")
console.log(typeof str4) // object
console.log(str1 == str4) // true
console.log(str1 === str4) // false


