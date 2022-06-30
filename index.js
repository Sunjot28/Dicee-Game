// FIRST DICE
var randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1 * 6) + 1);

randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomDiceImage1);

// SECOND DICE
var randomNumber2 = Math.random();
randomNumber2 = Math.floor((randomNumber2 * 6) + 1);

randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomDiceImage2);

// DECIDER
if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "🚩 Player 1 wins!"
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").textContent = "Player 2 wins! 🚩"
}
else{
    document.querySelector("h1").textContent = "Draw!"
}