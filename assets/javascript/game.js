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
// ?initialize the game for first time (comes in handy when need to reset guess counter), place values that need to reset inside
//listens for enter (13) can't be inside another func
document.addEventListener("keypress", function(event) {
  //console.log(document.getElementById("already-guessed"));
  switch (event.keyCode) {
    case 97:
      console.log("a");
      keyPressFunction("a");
      break;
    case 98:
      console.log("b");
      keyPressFunction("b");
      break;
    case 99:
      console.log("c");
      keyPressFunction("c");
      break;
    case 99:
      console.log("c");
      keyPressFunction("c");
      break;

    default:
      break;
  }
});
// Randomly chooses a choice from the options array. This is Computer's Guess
var computerGuess =
  computerChoice[Math.floor(Math.random() * computerChoice.length)];
//Determines which key was pressed.
// This function is run whenever the user presses a key.
function keyPressFunction(userGuess) {
  //?We are only interested in a-z letter keys
  //can check for each key code but would have to write out switch statement.

  if (userGuess === computerGuess) {
    wins++;
  } else {
    guessesLeft--;
    document.getElementById("already-guessed").innerHTML += userGuess;
  }

  // losses increase once guesses hits 0 and already guessed clears
  if (guessesLeft === 0) {
    losses++;
    alreadyGuessedText.textContent = "already guessed: " + "";
    guessesLeft = 10;
  }

  //Display the wins, losses, guesses left, list guesses so far
  winsText.textContent = "wins: " + wins;
  lossesText.textContent = "losses: " + losses;
  guessesText.textContent = "guesses left: " + guessesLeft;
  //alreadyGuessedText.textContent = "already guessed: " + userGuess;
}

//to do:
//make sure counter of guesses left doesn't go negative, once 0
//    reached, reset without refresh so user can play again
//also reset counter when there is a win.

//ideas:
//perhaps an array for counter for letters guessed would help with resetting the game?
