
//Declare variables and Grab elements
var player_1;
var player_2;
var player_1_img;
var player_2_img;
var img1   = document.querySelector(".img1");
var img2   = document.querySelector(".img2");
var winner = document.querySelector(".container h1");
var images = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", 
              "images/dice5.png", "images/dice6.png", ];



// Start the game
window.addEventListener("load", start_game);
