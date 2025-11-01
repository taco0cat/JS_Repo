// Slicing substring from a string 
// .slice(start, end) 

const fullName = "Taco Cat";

// Start till space using string methods
let firstName = fullName.slice(0, fullName.indexOf(" "))
let lastName = fullName.slice(fullName.indexOf(" ") + 1)
let lastChar = fullName.slice(-1)

console.log(firstName)
console.log(lastName)
console.log(lastChar)

const email = "tacocat@gmail.com"
let userName = email.slice(0, email.indexOf("@"))
let extension = email.slice(email.indexOf("@") + 1)
console.log(userName)
console.log(extension)