var randomNumber1 = Math.floor(Math.random() * 6 + 1);

var randomImage1 = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImage1);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomImage2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImage2);

if (randomNumber1 === randomNumber2) {
  document.querySelector(".container h1").innerHTML = "draw!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector(".container h1").innerHTML = "player 1 wins!";
} else {
  document.querySelector(".container h1").innerHTML = "player 2 wins!";
}
