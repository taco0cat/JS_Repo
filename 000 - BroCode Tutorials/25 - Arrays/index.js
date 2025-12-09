// Arrays

let fruits = ["apple", "orange", "banana"];
console.log(fruits);

// Changing Elements
fruits [0] = "coconut"
console.log("Changing elements using index")

// Acessing using index
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])

// .puhs() - Adding elements to the end
    //fruits[fruits.length] = "Watermelon"
fruits.push("Watermelon")
console.log("Push")
console.log(fruits);

// .pop() - Removing element from the end
fruits.pop()
console.log("Pop")
console.log(fruits);

// .unshift() - Adding element to the start
fruits.unshift("kiwi")
console.log("Unshift")
console.log(fruits);

// .shift() - Removing element from the start
fruits.shift()
console.log("Shift")
console.log(fruits);

// Length
let numOfFruits = fruits.length
console.log(numOfFruits);

// IndexOf
let index = fruits.indexOf("banana") // -1 = Not found
console.log(index);

// Iterating through lists
console.log("Normal Iteration")
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

// Reverse Iteration
console.log("Reverse Iteration")
for (let i = fruits.length - 1; i >= 0; i--){
    console.log(fruits[i])
}

// Enhanced For Loop Iteration
console.log("Enhanced For Loop")
for (let fruit of fruits){
    console.log(fruit)
}

// Sort

fruits.sort()
console.log("Sort")
console.log(fruits)

// Reverse Sort
fruits.sort().reverse()
console.log("Reverse Sort")
console.log(fruits)