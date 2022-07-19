function getComputerChoice(){
  const choices = [`Rock`,`Paper`,`Scissors`];

  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection){

  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerSelection.toUpperCase();

  if(playerSelection === `ROCK`){
    switch (computerSelection) {
      case `PAPER`: return `Computer`;
        break;
      case `SCISSORS`: return `Player`;
        break;
    }
  } else if (playerSelection === `PAPER`){
    switch (computerSelection) {
      case `SCISSORS`: return `Computer`;
        break;
      case `ROCK`: return `Player`;
        break;
    }
  } else if(playerSelection === `SCISSORS`){
    switch (computerSelection) {
      case `ROCK`: return `Computer`;
        break;
      case `PAPER`: return `Player`;
        break;
    }
  }
}

function game(){
  let playerScore = 0;
  let computerScore = 0;

  for(let i = 0; i < 5; i++){
    console.log(`Round ${i + 1}:`);
    let playerSelection = prompt(`Enter your choice (Rock, Paper or Scissors)`);
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    let winner = playRound(playerSelection,computerSelection);

    if(winner === `Player`){
      playerScore++;
      console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    } else if(winner === `Computer`){
      computerScore++;
      console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
    } else {
      console.log(`It's a tie! ${playerSelection} does not beat ${computerSelection}!`);
    }

    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
  }
  console.log(`Final Player Score: ${playerScore}`);
  console.log(`Final Computer Score: ${computerScore}`);
  if(playerScore > computerScore){
    console.log(`You win!`)
  } else if(computerScore > playerScore) {
    console.log(`Sorry! You lose!`)
  } else {
    console.log(`Nobody wins! It's a tie!`)
  }
}

console.log(`Welcome to Rock, Paper, Scissors.`);
console.log(`Let's play!`)
game();