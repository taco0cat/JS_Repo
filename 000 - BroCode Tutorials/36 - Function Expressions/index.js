// Function Expression = Define functions as values or variables

const hello = function() {
    console.log("Hello");
}

setTimeout(hello, 3000)
setTimeout(function() {
    console.log("Hello");
}, 3000)

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function (element){
    return Math.pow(element, 2);
})

console.log(squares)

const evenNums = numbers.filter(function (element){
    return element % 2 === 0;
})

console.log(evenNums)

const sum = numbers.reduce(function (accumulator, element){
    return accumulator + element;
})

console.log(sum)