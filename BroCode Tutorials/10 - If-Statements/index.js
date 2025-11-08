// If Statments

const myText = document.getElementById("myText")
const mySubmit = document.getElementById("mySubmit")
const resultElement = document.getElementById("resultElement")
let age = 0;

mySubmit.onclick = function(){
    
    age = myText.value;
    age = Number(age);

    if (age >= 100){
        resultElement.textContent = `Too Old to enter this site`
    }
    else if (age == 0){
        resultElement.textContent = `Just Born`
    }
    else if (age >= 18){
        resultElement.textContent = `Old enough to enter this site`
    }
    else if (age < 0){
        resultElement.textContent = `Invalid Age`
    }
    else{
        resultElement.textContent = `You must be 18+ to enter`
    }
}
