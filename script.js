
function computerPlay () {
  x = Math.floor(Math.random() * 3) + 1 
  return (x === 1) ? "rock":
  (x === 2) ? "paper" : "scissors" 
}

