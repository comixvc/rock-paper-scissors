console.log("Hello, World!")

function getCompChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultDiv = document.getElementById("result");
const newGameButton = document.getElementById("newgame");


let playerWin = 0;
let computerWin = 0;
let gamecount = 0;

if (rockButton && paperButton && scissorsButton && resultDiv) {
    rockButton.addEventListener("click", () => playRound("rock", getCompChoice()));
    paperButton.addEventListener("click", () => playRound("paper", getCompChoice()));
    scissorsButton.addEventListener("click", () => playRound("scissors", getCompChoice()));
}

if (newGameButton) {
    newGameButton.addEventListener("click", () => {
        playerWin = 0;
        computerWin = 0;
        gamecount = 0;
        resultDiv.innerHTML = "";
    });
}

function playRound(playerSelection, computerSelection) {
    if (playerWin < 3 && computerWin < 3) {
        gamecount++;
        if (playerSelection === computerSelection) {
            score = document.createElement("p");
            score.textContent = "It's a tie! game count is " + gamecount;
            resultDiv.appendChild(score);
            return;
        } else if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            playerWin++;
            score = document.createElement("p");
            score.textContent = `You win! player choice: ${playerSelection} beats computer choice:  ${computerSelection}. game count is ` + gamecount;
            resultDiv.appendChild(score);
            return;
            
        } else {
            computerWin++;
            score = document.createElement("p");
            score.textContent = `You lose! computer choice: ${computerSelection} beats player choice: ${playerSelection}. game count is ` + gamecount;
            resultDiv.appendChild(score);
            return;
        }
    } else {
        if (playerWin === 3) {
            score = document.createElement("p");
            score.textContent = "You won the game!";
            resultDiv.appendChild(score);
        } else if (computerWin === 3) {
            score = document.createElement("p");
            score.textContent = "Computer won the game!";
            resultDiv.appendChild(score);
        }
}
}


/*
function game() {
        gamecount++;
        const playerChoice = prompt("Enter rock, paper, or scissors:").toLowerCase().trim();
        if (!["rock", "paper", "scissors"].includes(playerChoice)) {
            alert("Invalid choice. Please enter rock, paper, or scissors.");
            return;
        }
        const computerChoice = getCompChoice();
        const result = playRound(playerChoice, computerChoice);
        console.log(`You chose: ${playerChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log(result);
    }
let playerWin = 0;
let computerWin = 0;
let gamecount = 0;
    _*/