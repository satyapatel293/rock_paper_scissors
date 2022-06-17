
function computerPlay () {
  x = Math.floor(Math.random() * 3) + 1 
  return (x === 1) ? "rock":
  (x === 2) ? "paper" : 
  "scissors";
}

function playRound (playerSelector, computerSelector) {

  let player = playerSelector.toLowerCase();

  if (player === "paper" && computerSelector === "rock") {
  return "You Win! Paper Beats Rock";
  }else if (player === "paper" && computerSelector === "scissors") {
    return "You Lose! Scissors Beats Paper";
  }else if (player === "rock" && computerSelector === "scissors") {
    return "You Win! Rock Beats Scissors";
  }else if (player === "rock" && computerSelector === "paper") {
    return "You Lose! Paper Beats Rock";
  }else if (player === "scissors" && computerSelector === "paper") {
    return "You Win! Scissors Beats Paper";
  }else if (player === "scissors" &&  computerSelector === "rock") {
    return "You Lose! Rock Beats Scissors";
  }else if (player === computerSelector) {
    return "Draw!";
  }
}


function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {  
    let round = playRound(prompt("Rock, Paper, or Scissors?"), computerPlay());
    console.log(round);

    if (round === "You Win! Paper Beats Rock" || 
    round === "You Win! Rock Beats Scissors" || 
    round ===  "You Win! Scissors Beats Paper") {
      playerScore++;
    }else if (round === "You Lose! Paper Beats Rock" || 
    round ===  "You Lose! Rock Beats Scissors" || 
    round ===  "You Lose! Scissors Beats Paper") {
      computerScore++;
    }
    console.log(`player ${playerScore}`);
    console.log(`computer ${computerScore}`);
  }

  if (playerScore === computerScore) {
    return "Game Over: Tie";
  } else if (playerScore > computerScore) {
    return "Game Over: You Win!";
  } else {
    return "Game Over: Computer Wins";
  }
}



function repeatGame(){
  let i = 1
  while (i){
    let Ready = prompt("Ready?", "yes/no");
    if (Ready === "no"){
      i = 0;
      break;
    }

    let game = game();
    console.log(game);
  }
}