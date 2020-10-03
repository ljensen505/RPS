

function computerPlay() {
    // generate random number 0 - 2 inclusive
    let random_number = Math.floor(Math.random() * 3);
    if (random_number === 0) {
        return "rock";
    } else if (random_number === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let message = "You chose " + playerSelection + ", Computer chose " + computerSelection;
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "paper") {
            console.log(message);
            return "You lose";
        } else if (computerSelection === "scissors") {
            console.log(message);
            return "You win";
        } else {
            console.log("You chose " + playerSelection + ", Computer chose " + computerSelection);
            return "it's a tie";
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "scissors") {
            console.log(message);
            return "You lose";
        } else if (computerSelection === "rock") {
            console.log(message);
            return "You win";
        } else {
            console.log(message);
            return "it's a tie";
        }
    } else if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "rock") {
            console.log(message);
            return "You lose";
        } else if (computerSelection === "paper") {
            console.log(message);
            return "You win";
        } else {
            console.log(message);
            return "it's a tie";
        }
    } else {
        return "Plase make a valid choice (rock, paper, or scissors)";
    }            
}


// UI LOGIC
// =====================

const rockbtn = document.querySelector('#rockbtn');
rockbtn.addEventListener('click', () => {
    playRound('rock');
});

const paperbtn = document.querySelector('#paperbtn');
paperbtn.addEventListener('click', () => {
    playRound('paper');
});

const scissorsbtn = document.querySelector('#scissorsbtn');
scissorsbtn.addEventListener('click', () => {
    playRound('scissors');
});

const playerCount = document.querySelector('#playerCount');
playerCount.textContent = playerScore;

const computerCount = document.querySelector('#computerCount');
computerCount.textContent = computerScore;