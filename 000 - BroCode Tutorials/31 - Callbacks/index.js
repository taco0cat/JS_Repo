// CallBack = function passed as an argument to another function 

// Used to handle asynchronous operations:
    // Reading a file
    // Network Requests
    // Interacting with DB's

function hello(callback){
    console.log("Hello");
    callback();
}

function goodbye(){
    console.log("Goodbye");
}

hello(goodbye); // When hello finishes, execute goodbye

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result;
}

sum(displayPage, 1, 2);