alert("Welcome to the Number Guessing Game!");


let secretNumber = Math.floor(Math.random() * 100) + 1;
console.log("Secret Number:", secretNumber); 

let guessed = false;

while (!guessed) {

  let userGuess = parseInt(prompt("Guess a number between 1 and 100:"));


  if (isNaN(userGuess)) {
    alert(" Invalid input. Please enter a number!");
  } else if (userGuess === secretNumber) {
    alert(" Correct! The number was " + secretNumber);
    guessed = true; 
  } else if (userGuess > secretNumber) {
    alert("Too high! Try again ");
  } else if (userGuess < secretNumber) {
    alert("Too low! Try again ");
  }
}
