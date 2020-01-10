// Create an array that lists out all of the computer choices
computerChoice = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

//VARIABLES
//===============================================================================

//Create variables to hold number of wins, losses, guesses left, guesses so far
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = 0;

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesText = document.getElementById("guesses");
var alreadyGuessedText = document.getElementById("already-guessed");
// FUNCTIONS
// ==============================================================================
// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
  //Determines which key was pressed.
  var userGuess = event.key;

  // Randomly chooses a choice from the options array. This is Computer's Guess
  var computerGuess =
    computerChoice[Math.floor(Math.random() * computerChoice.length)];

  if (userGuess === computerGuess) {
    wins++;
  } else {
    guessesLeft--;
  }

  if (guessesLeft === 0) {
    losses++;
  }

  //test if it's working
  console.log(userGuess);
  console.log(wins);
  console.log(losses);

  //Display the wins, losses, guesses left, list guesses so far
  winsText.textContent = "wins: " + wins;
  lossesText.textContent = "losses: " + losses;
  guessesText.textContent = "guesses left: " + guessesLeft;
  //alreadyGuessedText.textContent = "Already Guessed" + userGuess;
};

//to do:
//make sure counter of guesses left doesn't go negative, once 0
//    reached, record loss and reset without refresh so user can play again
//also reset counter when there is a win.
//list letters that have already been guessed
