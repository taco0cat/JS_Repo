// Functions 

function happyBirthday(username, age){
    console.log(`Happy birthday to you!`);
    console.log(`Happy birthday to you!`);
    console.log(`Happy birthday dear, ${username}`);
    console.log(`Happy birthday to you!`);
    console.log(`You are ${age} years old!`);
}

function isEven(number){
    return number % 2 === 0 ? true : false;
}

function isValidEmail(email){
    return email.includes("@") ? true : false;
}

console.log(happyBirthday("tacocat", 20));
console.log(isValidEmail("taco@cat.com"));