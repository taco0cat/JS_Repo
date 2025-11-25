// Dice Roller Project

function rollDice(){
    const numOfDice = document.getElementById("noOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++){
        const randomNum = Math.floor(Math.random() * 6) + 1;
        values.push(randomNum);
        images.push(`<img src="assets/${randomNum}.png" alt="Dice ${randomNum}">`);
    }

    diceResult.innerHTML = `Dice: <br> [${values.join(", ")}]`;
    diceImages.innerHTML = images.join("");
}