// Methods to manipulate and work with strings

let userName = "TacoCat";
let whitespaces = "   Taco   Cat   ";

// .charAt(index) 
    // Character at specified index
console.log(userName.charAt(4)); // Not Found = Blank

// indexOf("char") 
    // Index of first occurance of given character of word specified (Not Found = -1)
console.log(userName.indexOf("C")) 
// console.log(userName.indexOf("Cat")) // Both Return 4

// lastIndexOf("char") 
    // Index of last occurance of given character of word specified 
console.log(userName.lastIndexOf("a"))

// .length
    // len of string
console.log(userName.length)

// .trim()
    // Remove white spaces around string
console.log(whitespaces.trim())

// .toUpperCase() and .toLowerCase()
console.log(userName.toUpperCase())
console.log(userName.toLowerCase())

// .repeat(times)
    // Repeats string given number of times
console.log(userName.repeat(3))

// .startsWith(char) and .endsWith(char) 
    // Returns true/false if string starts with given char or word
console.log(userName.startsWith("a"))
console.log(userName.startsWith("T"))
console.log(userName.endsWith("t"))

// .includes(char)
    // Returns true/false if string includes given char or word
console.log(userName.includes("zoo"))
console.log(userName.includes("Cat"))

// .replaceAll(old, new)
    // Replaces all old characters in string with new
let phoneNumber = "123-456-7890"
phoneNumber =  phoneNumber.replaceAll("-", "/")
console.log(phoneNumber)

// .padStart(desired_str_len, pad_with_Char/s)
console.log(userName.padStart(10, "007"))

// .padEnd(desired_str_len, pad_with_Char/s)
console.log(userName.padEnd(10, "007"))