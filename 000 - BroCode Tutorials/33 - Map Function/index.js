// .map() - applies callback function to each element in an array and returns a new array

const numbers = [1, 2, 3, 4, 5];
const cubed = numbers.map(cube);

console.log(cubed);

function cube(element){
    return Math.pow(element, 3);
}


const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);

console.log(dates);
console.log(formattedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
}