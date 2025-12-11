// Arrow Functions = a concise way to write function expressions, good for simple functions that you use only once
// Syntax: (parameters) => {some code}

const hello = (name, age) => {console.log(`Hello ${name}, you are ${age} years old!`)}

hello("Taco0Cat", 25);

const numbers = [1, 2, 3, 4, 5, 6]
const squares = numbers.map((element) => Math.pow(element, 2))
const cubes = numbers.map((element) => Math.pow(element, 3))

console.log(squares)
console.log(cubes)

const evenNums = numbers.filter((element) => element % 2 === 0)
const oddNums = numbers.filter((element) => element % 2 !== 0)

console.log(evenNums)
console.log(oddNums) 

const total = numbers.reduce((prev, next) => prev + next)
console.log(total)