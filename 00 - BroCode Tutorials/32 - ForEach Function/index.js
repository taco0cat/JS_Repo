// forEach() = iterate over array and apply a function to each element
            
        // array.forEach(callback)
        // element, index, array are provided 

let numbers = [1, 2, 3, 4, 5]

numbers.forEach(cube)
console.log(numbers)

function cube(element, index, array){
    array[index] = Math.pow(element, 3)
}


fruits = ["apple", "banana", "orange", "grapes", "coconut"]

fruits.forEach(capitalize)
fruits.forEach(display) 

function display(element){
    console.log(element)
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1)
}
