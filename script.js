
let humanScore = 0;
let computerScore = 0;



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
    // const prompt = require('prompt-sync')();
    const playerChoice = prompt("Please choose between rock, paper or scissors: ").toLowerCase();
        return playerChoice;
} 

function playRound(humanChoice, computerChoice) {
        
        if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You won this round! rock beats scissors");
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You won this round! paper beats rock")
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You won this round! scissors beats paper")
            humanScore++;
        } else if (humanChoice === computerChoice) {
            console.log("It's a tie try again!")
        } else {
                console.log("You lose " + computerChoice + " beats " + humanChoice);
                computerScore++;
        }
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

console.log(humanSelection)
console.log(computerSelection)
console.log(`Computer score is ${computerScore}`);
console.log(`Human score is ${humanScore}`)

console.log(playRound(humanSelection, computerSelection));