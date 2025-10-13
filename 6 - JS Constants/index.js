// Calculating Circumference of a Circle using Constants

const PI = 3.14159; // const convention (all upercase) except for strings
let radius;
let circumference;


document.getElementById("mySubmit").onclick = function() {
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + " cm";
}