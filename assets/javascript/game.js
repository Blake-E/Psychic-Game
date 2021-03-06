<script src = "game.js"/>
// setting the variables used for the game
var lettersGuessed = [];
var guessesLeft = 13;
var wins = 0;
var winsCounter = 0;
var losesCounter = 0;
var lose = 0;
// will generate a letter using a method (Math.random) and rounding the answer so it is a whole number using Math.round
var computerGuess =
    String.fromCharCode(
        Math.round(Math.random() * 26) + 97
);
    console.log(computerGuess);
// will add the letter chosen by player and disregard capitalization
document.onkeydown = function(event) {
    var keyPress = (String.fromCharCode(event.keyCode)).toLowerCase();
    addLetter(keyPress);
}
// checks to see if the letter has already been selected by player
function addLetter (usersKeypress) {
    var repeatGuess = lettersGuessed.some(function(item){
    return item === usersKeypress;
})
// alerts the player they have already guessed that letter and to pick another one
if (repeatGuess) {
    alert(usersKeypress + " Been there, done that- Try again!");
}
// continues to compare the player guess to the computer guess
 else {
    lettersGuessed.push(usersKeypress);
    console.log(lettersGuessed);
    showLettersGuessed();
    guessMatch(usersKeypress);
}
}
// will store the letters guessed so far by the player
function showLettersGuessed() {
    var tempStr = lettersGuessed.join(", ");
    document.getElementById("guesses-so-far").innerHTML = tempStr;
}
// will run the function to compare player answer to computer choice
function guessMatch (character) {
    console.log(character);
    console.log(computerGuess);
// if the guesses match, function will run an alert and add the win
if (character === computerGuess) {
    alert("You win!");
    wins = wins + 1;
    showWins();
}    
// once guesses are done, game will restart and add the loss
else if (guessesLeft === 0) {
    alert("Better luck next time, lets start over.");
    lose = lose + 1;
    resetVariables ();
}
// if the guess does not match, function will subtract guesses available 
else {
    guessesLeft = guessesLeft - 1;
    showGuessesRemaining();
}
}
// shows wins as a value next to its name
function showWins() {
    document.getElementById("win").innerHTML = wins;
}
// shows how many guesses are left for player
function showGuessesRemaining() {
    document.getElementById("guesses-left").innerHTML = guessesLeft;
}
// resets the variables for a new game
function resetVariables () {
    lettersGuessed = [];
    guessesLeft = 10;
}
// refreshes a new game with wins value and guesses remaining value still in place
function startGame() {
    showGuessesRemaining();
    showWins();
}
// makes the game start over and pick a new letter
startGame();