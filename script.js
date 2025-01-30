
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

function getHumanChoice() {
    const playerChoice = prompt("Please choose between rock, paper or scissors: ").toLowerCase();
        return playerChoice;
} 

function playRound(humanChoice, computerChoice) {
    for (; humanScore < 3; humanScore++) {
        if (humanChoice === "rock" && computerChoice === "rock") {
            console.log("It's a tie try again");
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            console.log("Computer wins this round!");
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            console.log("You won this round! rock beats scissors");
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            console.log("You won this round! paper beats rock")
        } else if (humanChoice === "paper" && computerChoice === "paper") {
            console.log("It's a tie try again");
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            console.log("Computer wins this round!");
        }
    
    }
    console.log(humanScore);
    
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

console.log(computerSelection)
console.log(humanSelection)

console.log(computerScore);

playRound(computerSelection ,humanSelection);