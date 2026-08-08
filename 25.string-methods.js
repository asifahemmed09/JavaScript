let userInput = " ALison JOE |  Alison@gmail.com | JavaScript developer,I like JavaScript and also like coffee"

// Making a array from a string by separator
let userDetails = userInput.split("|")
console.log(userDetails)

// Removing extra whitespace from beginning and end
let userName = userDetails[0].trim()
let userEmail = userDetails[1].trim()
let userBio = userDetails[2].trim()

console.log(userName)
console.log(userEmail)
console.log(userBio)

// Uppercase
userName = userName.toUpperCase()
console.log(userName)

// Lowercase
userEmail = userEmail.toLowerCase()
console.log(userEmail)

// Determine existence of a character in a string
let isJSDeveloper = userBio.includes("JavaScript")
console.log(isJSDeveloper)

// Find index of any character
let indexOfComma = userBio.indexOf(",")
console.log(indexOfComma)

// Slicing a string
let profession = userBio.slice(0,indexOfComma)
console.log(profession)

let isValidEmail = userEmail.startsWith(userName.slice(0,0).toLowerCase()) && userEmail.includes("@") && userEmail.endsWith(".com")
console.log(isValidEmail)


let user = {
  name: userName,
  email: isValidEmail && userEmail,
  profession: profession
}

console.log(user)
