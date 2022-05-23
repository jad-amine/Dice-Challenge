
//Declared variables and Grab elements
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

function start_game(){
   // Draw players random numbers
   player_1 = Math.floor(Math.random()*6);
   player_2 = Math.floor(Math.random()*6);

   // Link player to relative image URL
   player_1_img = images[player_1];
   player_2_img = images[player_2];

   // Set images src attribute
   img1.src = player_1_img;
   img2.src = player_2_img;
   display_winner(player_1, player_2);
}


// Display Winner Section
function display_winner(a, b){
   if(a > b){
      winner.innerHTML = "Player 1 Wins!"
   } else if (a < b){
      winner.innerHTML = "Player 2 Wins!"
   } else {
      winner.innerHTML = "Draw!"
   }
}