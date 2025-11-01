// Switch --> Efficient Replacement of Multiple If-Else Statements

// User input using Prompt
// let day = Number(window.prompt("Enter a number between 1 and 7"));

let day = 1;

switch(day){
    case 1:
        console.log("It is Monday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    case 4:
        console.log("It is Thursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
        break;
    case 7:
        console.log("It is Sunday");
        break;
    default:
        console.log(`${day} is not a day`)
        break; // Break is not needed here, added for uniformity
}

let testScore = 22;
let letterGrade;

// Eval if code is true, if true, execute, or move to next case
switch(true){
    case testScore >= 90:
        letterGrade = "A"
        break;
    case testScore >= 80:
        letterGrade = "B"
        break;
    case testScore >= 70:
        letterGrade = "C"
        break;
    case testScore >= 60:
        letterGrade = "D"
        break;
    default:
        letterGrade = "F"
        break;
}

console.log(letterGrade)