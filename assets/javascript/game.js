// We start the game with the scores and guess counter set to 9.
var wins = 0;
var losses = 0;
guessesLeft = 9;


//Generate a random letter
function random_character() {
    var chars = "abcdefghijklmnopqurstuvwxyz";
    return chars.substr(Math.floor(Math.random() * 28), 1);
}

//Set a variable to a random letter
var computerLetter = random_character();
console.log(computerLetter);

// Function that updates the score and the guess list...
function updateScoreGuess(userInput) {
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    document.querySelector("#userGuesses").innerHTML += userInput + " ";
}

// Function that loads a new game...
function newGame() {
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: 9"
    document.querySelector("#userGuesses").innerHTML = " ";
    computerLetter = random_character();
    guessesLeft = 9;
}

// Function that validates the user selected a letter
function allLetter(inputtxt) {
    var letters = /^[a-z]+$/;
    if (inputtxt.value.match(letters)) {
        return true;
    }
    else { return false; }
}

// Function that validates the user selected a letter
// function allLetter(inputtxt) {
//     var letters = (/[a-z]/i);
//     if (inputtxt.value.match(letters)) {
//         return true;
//     }
//     else { return false; }
// }

//Accept the user input of a character and set to a variable
// When the user presses a key, it will run the following function...
document.onkeyup = function (event) {
    guessesLeft--;
    // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
    var userInput = event.key.toLowerCase();

    // If they guess the correct answer, increase and update score, alert them they got it right.
    if (userInput === computerLetter) {
        alert("Correct!");
        wins++;
        updateScoreGuess(userInput);
        newGame();
    }
    // If wrong, alert them they are wrong.
    else {
        alert("Wrong!");
        losses++;
        updateScoreGuess(userInput);

        if (guessesLeft === 0) {
            alert("I'll pick a new letter...");
            newGame();
        }
    }

}
