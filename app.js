let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector('.scoreboard');
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ['r', 'p', 's',]
  return(choices[Math.floor(Math.random() * 3)]);
}

function convertToWord(letter) {
  if (letter === 'r') {
    return 'Rock';
  } else if (letter === 'p') {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function win(user, computer) {
  userScore++;
  userScore_span.textContent = userScore;
  result_p.innerHTML = `${convertToWord(user)} beats ${convertToWord(computer)}. You win!`;
}

function lose(user, computer) {
  computerScore++;
  computerScore_span.textContent = computerScore;
  result_p.innerHTML = `${convertToWord(computer)} beats ${convertToWord(user)}. You lose!`;
}

function draw() {
  result_p.innerHTML = "It's a tie!"
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
      case "rp":
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', function() {
    game('r');
  });
  
  paper_div.addEventListener('click', function() {
    game('p');
  });
  
  scissors_div.addEventListener('click', function() {
    game('s');
  });
}

main();