function rockPaperScissors(throw1, throw2) {
  if (throw1 === throw2) {
    return "It's a tie!";
  } else if (throw1 === "scissors" && throw2 === "paper" || throw1 === "rock" && throw2 === "scissors" || throw1 === "paper" && throw2 === "rock") {
    return "Player 1 Wins!";
  } else if (throw2 === "scissors" && throw1 === "paper" || throw2 === "rock" && throw1 === "scissors" || throw2 === "paper" && throw1 === "rock") {
      return "Player 2 Wins!";
  }
}

console.log(rockPaperScissors('rock', 'scissors'));
console.log(rockPaperScissors('rock', 'paper'));
console.log(rockPaperScissors('paper', 'paper'));


// rock
// paper
// scissors
