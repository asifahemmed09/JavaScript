// Number -> String
let a = 123;
let b = String(a);
console.log(b); // "123"
console.log(typeof b); // string

// Boolean -> String
let isAdult = true;
let isAdultStr = String(isAdult);
console.log(isAdultStr); // "true"
console.log(typeof isAdultStr); // string

// String -> Number
let str1 = '123';
let num1 = Number(123);
console.log(num1); // 123
console.log(typeof num1); // number

let str2 = '123Tap';
let num2 = Number(str2);
console.log(num2); // NaN
console.log(typeof num2); // number

//* parseInt() function change  string to number with different approach
let str3 = '123Tap';
let num3 = parseInt(str3);
console.log(num3); // 123 //* parseInt convert alphanumeric to number but when it founds alphabet it immediately stopped execution
console.log(typeof num3); // number

let str4 = 'Tap123';
let num4 = parseInt(str4);
console.log(num4); // NaN //* parseInt when found alphabet it immediately stopped execution
console.log(typeof num4); // number

let str5 = ' 123 ';
let num5 = parseInt(str5);
console.log(num5); // 123 //* parseInt skips spaces at the zero index of a string and continues to execute
console.log(typeof num5); // number

let str6 = ' 1 2 3 ';
let num6 = parseInt(str6);
console.log(num6); // 1 //* parseInt skips spaces at the zero index of a string and continues to execute but immediately stopped execution when it found spaces at another indexes
console.log(typeof num5); // number

// Boolean -> Number
let isStudent = false
let isStudentNum = Number(isStudent)
console.log(isStudentNum) // 0
console.log(typeof isStudentNum) // number

let isMarried = true
let isMarriedNum = Number(isMarried)
console.log(isMarriedNum) // 1
console.log(typeof isMarriedNum) // number


// String -> Boolean
let myPet = "Cat"
let myPetBool = Boolean(myPet)
console.log(myPetBool) // true
console.log(typeof myPetBool) // boolean

let emptyStr = ""
let emptyStrBool = Boolean(emptyStr)
console.log(emptyStrBool) // false
console.log(typeof emptyStrBool) // boolean

// Number -> Boolean
let zero = 0
let zeroBool = Boolean(zero)
console.log(zeroBool) // false
console.log(typeof zeroBool) // boolean

let notNumber = "Hello" / 2
let notNumberBool = Boolean(notNumber)
console.log(notNumberBool) // false
console.log(typeof notNumberBool) // boolean

let validNum = 123
let validNumBool = Boolean(validNum)
console.log(validNumBool) // true
console.log(typeof validNumBool) // boolean


//* Falsy Values: 0,NaN,"",[] -> false
//* Truthy Values: except falsy values everything is truthy value -> true
