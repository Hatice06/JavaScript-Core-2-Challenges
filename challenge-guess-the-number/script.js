let randomNumber = Math.floor(Math.random() * 100 + 1);

let numberOfTries = 7;

function guessNumber() {
  //Collect input from the user
  
  let inputGuess = document.querySelector(".inputs-Values").value;
  let textEl = document.querySelector(".final-output");
  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  if (inputGuess <= 0 || inputGuess === null || inputGuess > 100){
    textEl.innerText = "Please enter a number between 1 and 100";
  }
  
  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  else if (inputGuess > randomNumber) {
    textEl.innerText = "Number is too high, try again";
     numberOfTries--;
  }

  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
  else if (inputGuess < randomNumber) {
    textEl.innerText = "Number is too low, try again";
     numberOfTries--;
  }

  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
  else {
    textEl.innerText = "Guess is correct. You win!";
  }
 
  pEl.innerText = 'Number of Tries remaining : ' + numberOfTries;
}
 let pEl = document.querySelector('.number-of-tries'); 

 
// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
  numberOfTries = 7;
   pEl.innerText = "Number of Tries remaining : " + numberOfTries;
  randomNumber = Math.floor(Math.random() * 100 + 1);
  //Reset users input field
  document.querySelector(".inputs-Values").value = '';
  //Reset tries, and triesTaken by the user

}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.querySelector(".btnNewGame").addEventListener('click', newGame);
document.addEventListener("keypress", keyBoardEvents);
