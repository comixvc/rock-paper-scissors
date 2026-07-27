console.log("Hello, World!");
function getCompChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert("It's a tie! game count is " + gamecount);
        return;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerWin++;
        alert(`You win! ${playerSelection} beats ${computerSelection}. game count is ` + gamecount);
        return;
        
    } else {
        computerWin++;
        alert(`You lose! ${computerSelection} beats ${playerSelection}. game count is ` + gamecount);
        return;
    }
}

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
while (playerWin < 3 && computerWin < 3) {
    game(); 
}