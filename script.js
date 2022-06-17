
function computerPlay () {
  x = Math.floor(Math.random() * 3) + 1 
  return (x === 1) ? "rock":
  (x === 2) ? "paper" : "scissors" 
}

function playRound (playerSelector, computerSelector) {
  if (playerSelector === "paper" &&  computerSelector === "rock") {
  return "You Win! Paper Beats Rock"
  }
  else if (playerSelector == "paper" &&  computerSelector == "scissors") {
    return "You Lose! Scissors Beats Paper"
  }
  else if (playerSelector == "paper" &&  computerSelector == "paper") {
    return "Draw!"
  }
  else if (playerSelector == "rock" &&  computerSelector == "scissors") {
    return "You Win! Rock Beats Scissors"
  }
  else if (playerSelector == "rock" &&  computerSelector == "paper") {
    return "You Lose! Paper Beats Rock"
  }
  else if (playerSelector == "rock" &&  computerSelector == "rock") {
    return "Draw!"
  }
  else if (playerSelector == "scissors" &&  computerSelector == "paper") {
    return "You Win! Scissors Beats Paper"
    
  }
  else if (playerSelector == "scissors" &&  computerSelector == "rock") {
    return "You Lose! Rock Beats Scissors"
  }
  else if (playerSelector == "scissors" &&  computerSelector == "scissors") {
    return "Draw!"
  }
}