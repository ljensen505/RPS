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

function reset() {
  userScore = 0;
  computerScore = 0;
  userScore_span.textContent = userScore;
  computerScore_span.textContent = computerScore;
}

function win(user, computer) {
  userScore++;
  if (userScore >= 5) {
    result_p.innerHTML = 'Congratulations! You won the round!';
    reset();
  } else {
    userScore_span.textContent = userScore;
  result_p.innerHTML = `${convertToWord(user)} beats ${convertToWord(computer)}. You win!`;
  }
}

function lose(user, computer) {
  computerScore++;
  if (computerScore >= 5) {
    result_p.innerHTML = 'You lost this round. Try again!';
    reset();
  } else {
    computerScore_span.textContent = computerScore;
  result_p.innerHTML = `${convertToWord(computer)} beats ${convertToWord(user)}. You win!`;
  }
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