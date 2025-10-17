// Math Function Practice

// let randomNum = Math.random(); // Between 0 and 1
// let randomNum = Math.floor(Math.random() * 6) + 1; // Dice (1-6)

// const min = 50;
// const max = 100;
// let randomNum = Math.floor(Math.random() * (max - min)) + min; // Between 50 and 100


// Random Number Generator
const myBtn = document.getElementById("myBtn");
const Label1 = document.getElementById("Label1");
const Label2 = document.getElementById("Label2");
const Label3 = document.getElementById("Label3");

const min = 1;
const max = 6;

let randomNum1;
let randomNum2;
let randomNum3;

myBtn.onclick = function() {
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;

    Label1.textContent = randomNum1;
    Label2.textContent = randomNum2;
    Label3.textContent = randomNum3;
}


console.log(randomNum)