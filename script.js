
// 1. Step up the Git repository/Workspace.
// 2. Write the logic to get the computer choice
// 3. Write the logic to get the human choice.
// 4. Declare the player score variables.
// 5. Write the logic to play a single round.
// 6. Write the logic to play the entire game.

// #Step 2
// create a function that gets the computer choice
// the function will return one of the string values; either rock, paper or scissors.
// test that the function returns what i expect it to return using console.log or use the browser developer tools

// Step 3
// create a function the gets the human choice
// this function will also return one of the valid choices depending on what the user input.
// test what the function returns by using console.log.

// Step 4
// Declare the players score variables. and write variables to keep track of the players score/
// create two new variables named humanscore and computerscore in the global scope
// initialize those variables with the values of 0.

// Step 5
// create a logic to play a single round.
// create a function named playRound.
// define two parameters for playRound: humanchhoice and computerchoice. use these two parameter to take the human and computer as argument

let humanScore = 0;
let computerScore = 0;

console.log("Hello world!");

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else (randomNumber === 2) 
        return "scissors";
}

console.log(getComputerChoice());


function getHumanChoice() {
    const playerChoice = parseInt(prompt("Please enter a number from 1 to 3: "));

    if (playerChoice < 1 || playerChoice > 3) {
        alert("Please enter a valid number");
    } else if (playerChoice === 1) {
        return "rock";
    } else if (playerChoice === 2) {
        return "paper";
    } else if (playerChoice === 3) {
        return "scissors";
    }
} 
console.log(getHumanChoice());