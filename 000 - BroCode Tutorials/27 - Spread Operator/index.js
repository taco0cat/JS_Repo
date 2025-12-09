// Spread Operator = ... 
// Expands iterables into sep elements

// Array
let numbers = [1, 2, 3, 4, 5];
let max = Math.max(...numbers)
let min = Math.min(...numbers)

console.log(max)
console.log(min)

// Strings
let userName = "Taco0Cat"
let letters = [...userName]

console.log(letters)

// Shallow Copy of Array
let fruits = ["apple", "orange", "banana"]
let vegetables = ["carrots", "celery", "potatoes"]
let foods = [...fruits, ...vegetables, "eggs", "milk"] 

console.log(foods)