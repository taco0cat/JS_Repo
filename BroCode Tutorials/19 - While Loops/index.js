// While Loop

let username = "";

// while (username === "" || username === null) {
//     username = window.prompt("Enter your username:");
// }

// console.log(`Hello ${username}`)

do{
    username = window.prompt("Enter your username:");
}while(username === "" || username === null)

console.log(`Hello ${username}`)

let loggedIn = false;
let username1;
let password;

while(!loggedIn){
    username1 = window.prompt(`Enter your username1`);
    password = window.prompt(`Enter your password`);

    if(username1 === "myUsername1" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials! Please try again");
    }
}