document.query

var randomNumber1 = Math.floor(Math.random() * 6 + 1);

var diceImg = "images/dice" + randomNumber1 + ".png"

var imgElement = document.getElementById("img1");

imgElement.src = diceImg;

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var diceImg2 = "images/dice" + randomNumber2 + ".png"

var imgElement2 = document.getElementById("img2");

imgElement2.src = diceImg2;

//If player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }