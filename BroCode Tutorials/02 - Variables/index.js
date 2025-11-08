// Variables

let x; // Declaration
x = 123; // Assignment

let age = 25; // Together

console.log(`You are ${age} years old`); // only backticks allow inserting var like this

// Data Type of age
// Number, String, Boolean
console.log(typeof age);

let online = true;
console.log(online);
console.log(typeof online);

// Display var on website
let fullName = "Bro Code";
let isStudent = "False";

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = age;
document.getElementById("p3").textContent = isStudent;
