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

//listens for alpha key presses, since we are only interested in alpha characters
document.addEventListener("keypress", function(event) {
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
    case 100:
      console.log("d");
      keyPressFunction("d");
      break;
    case 101:
      console.log("e");
      keyPressFunction("e");
      break;
    case 102:
      console.log("f");
      keyPressFunction("f");
      break;
    case 103:
      console.log("g");
      keyPressFunction("g");
      break;
    case 104:
      console.log("h");
      keyPressFunction("h");
      break;
    case 105:
      console.log("i");
      keyPressFunction("i");
      break;
    case 106:
      console.log("j");
      keyPressFunction("j");
      break;
    case 107:
      console.log("k");
      keyPressFunction("k");
      break;
    case 108:
      console.log("l");
      keyPressFunction("l");
      break;
    case 109:
      console.log("m");
      keyPressFunction("m");
      break;
    case 110:
      console.log("n");
      keyPressFunction("n");
      break;
    case 111:
      console.log("o");
      keyPressFunction("o");
      break;
    case 112:
      console.log("p");
      keyPressFunction("p");
      break;
    case 113:
      console.log("q");
      keyPressFunction("q");
      break;
    case 114:
      console.log("r");
      keyPressFunction("r");
      break;
    case 115:
      console.log("s");
      keyPressFunction("s");
      break;
    case 116:
      console.log("t");
      keyPressFunction("t");
      break;
    case 117:
      console.log("u");
      keyPressFunction("u");
      break;
    case 118:
      console.log("v");
      keyPressFunction("v");
      break;
    case 119:
      console.log("w");
      keyPressFunction("w");
      break;
    case 120:
      console.log("x");
      keyPressFunction("x");
      break;
    case 121:
      console.log("y");
      keyPressFunction("y");
      break;
    case 122:
      console.log("z");
      keyPressFunction("z");
      break;

    default:
      break;
  }
});
// Randomly chooses a choice from the options array. This is Computer's Guess
var computerGuess =
  computerChoice[Math.floor(Math.random() * computerChoice.length)];

// This function is run whenever the user presses a key. Also, displays already-guessed
function keyPressFunction(userGuess) {
  if (userGuess === computerGuess) {
    wins++;
  } else {
    guessesLeft--;
    document.getElementById("already-guessed").innerHTML += userGuess;
  }

  // losses increase once guesses hits 0 and already-guessed goes back to 10
  if (guessesLeft === 0) {
    losses++;
    alreadyGuessedText.textContent = "already guessed: " + "";
    guessesLeft = 10;
  }

  //Display the wins, losses, guesses left, list guesses so far
  winsText.textContent = "wins: " + wins;
  lossesText.textContent = "losses: " + losses;
  guessesText.textContent = "guesses left: " + guessesLeft;
}
