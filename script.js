
let playerScore = 0;
let computerScore = 0;


function computerPlay () {
  x = Math.floor(Math.random() * 3) + 1 
  return (x === 1) ? "rock":
  (x === 2) ? "paper" : 
  "scissors";
}

const result = document.querySelector('#round')
const score = document.querySelector('#score')

function playRound (playerSelector, computerSelector) {
  if (playerSelector === "paper" && computerSelector === "rock") {
    playerScore++;
    return "You Win! Paper Beats Rock";
  }else if (playerSelector === "paper" && computerSelector === "scissors") {
    computerScore++
    return "You Lose! Scissors Beats Paper";
  }else if (playerSelector === "rock" && computerSelector === "scissors") {
    playerScore++
    return "You Win! Rock Beats Scissors";
  }else if (playerSelector === "rock" && computerSelector === "paper") {
    computerScore++
    return "You Lose! Paper Beats Rock";
  }else if (playerSelector === "scissors" && computerSelector === "paper") {
    playerScore++
    return "You Win! Scissors Beats Paper";
  }else if (playerSelector === "scissors" &&  computerSelector === "rock") {
    computerScore++
    return "You Lose! Rock Beats Scissors";
  }else if (playerSelector === computerSelector) {
    return "Draw!";
  }
}

let buttons = document.querySelectorAll("button")

function endGame() {
  if (playerScore === 5){
    result.textContent =  "GAME OVER YOU WIN"
    computerScore = 0 
    playerScore = 0 
  }  else if (computerScore === 5) {
    result.textContent =  "GAME OVER YOU LOSE"
    computerScore = 0 
    playerScore = 0 
  }
}


function turn(e) {
  result.textContent =  playRound(this.id, computerPlay())
  score.textContent =  `Player: ${playerScore}
  Computer: ${computerScore}`
  endGame();
}

buttons.forEach((button) => {
  button.addEventListener('click', turn)
  })

