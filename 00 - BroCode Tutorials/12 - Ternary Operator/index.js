// Ternary Operator : Shortcut to an If-Else statement
// Assign Variable based on Condition
// Var = condition ? codeIfTrue : codeIfFalse

let age = 21;
let message = age >= 18 ? "You are an adult" : "You are a child";

let time = 16;
let greeting = time <= 12 ? "Good morning" : "Good Afternoon"

let isStudent = true;
let checkStatus = isStudent ? "You are a student" : "You are not a student"

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
let discountedPrice = purchaseAmount - (purchaseAmount * (discount/100))

console.log(message)
console.log(greeting)
console.log(checkStatus)
console.log(`Your total is $${discountedPrice}`)