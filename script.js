function getComputerChoice() {
  const choices = [`Rock`, `Paper`, `Scissors`];

  return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {

  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerSelection.toUpperCase();
  let winner = '';
  if (playerSelection === `ROCK`) {
    switch (computerSelection) {
      case `PAPER`: winner = `Computer`;
        break;
      case `SCISSORS`: winner = `Player`;
        break;
    }
  } else if (playerSelection === `PAPER`) {
    switch (computerSelection) {
      case `SCISSORS`: winner = `Computer`;
        break;
      case `ROCK`: winner = `Player`;
        break;
    }
  } else if (playerSelection === `SCISSORS`) {
    switch (computerSelection) {
      case `ROCK`: winner = `Computer`;
        break;
      case `PAPER`: winner = `Player`;
        break;
    }
  }
  updateGUIScore(winner);
}

function updateGUIScore(winner) {
  const roundResultPara = document.createElement('p');
  if (winner === `Player`) {
    playerScore++;
    roundResultPara.textContent = `You win! ${playerSelection} beats 
            ${computerSelection}!`;
  } else if (winner === `Computer`) {
    computerScore++;
    roundResultPara.textContent = `You win! ${computerSelection} beats 
            ${playerSelection}!`;
  } else {
    roundResultPara.textContent = `It's a tie! ${playerSelection} does 
            not beat ${computerSelection}!`;
  }
  container.appendChild(roundResultPara);
  const playerScorePara = document.createElement('p');
  playerScorePara.textContent = `Player Score: ${playerScore}`;
  const computerScorePara = document.createElement('p');
  computerScorePara.textContent = `Computer Score: ${computerScore}`;
}

function game(container) {
  let playerScore = 0;
  let computerScore = 0;
  const roundDetailsPara = document.createElement('p');
  container.appendChild(roundDetailsPara);

  //Add event listeners to buttons
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click',
      () => {
        playRound(button.textContent, computerSelection);
      })
  });
  for (let i = 0; i < 2; i++) {
    roundDetailsPara.textContent = `Round ${i + 1}:`
    document.querySelector('.buttons').style.display = "block";
    const inputMessagePara = document.createElement('p');
    inputMessagePara.textContent = `Enter your choice (Rock, Paper or Scissors)`;
    container.appendChild(inputMessagePara);

    let computerSelection = getComputerChoice();
    const computerChoicePara = document.createElement('p');
    computerChoicePara.textContent = `Computer Choice: ${computerSelection}`;
    container.appendChild(computerChoicePara);


  }

  const finalPlayerScorePara = document.createElement('p');
  finalPlayerScorePara.textContent = `Final Player Score: ${playerScore}`;
  container.appendChild(finalPlayerScorePara);

  const finalComputerScorePara = document.createElement('p');
  finalComputerScorePara.textContent = `Final Computer Score: ${computerScore}`;
  container.appendChild(finalComputerScorePara);

  const finalResultPara = document.createElement('p');

  if (playerScore > computerScore) {
    finalResultPara.textContent = `You win!`;
  } else if (computerScore > playerScore) {
    finalResultPara.textContent = `Sorry! You lose!`;
  } else {
    finalResultPara.textContent = `Nobody wins! It's a tie!`;
  }

  container.appendChild(finalResultPara);
}
const buttonsContainer = document.querySelector('.buttons');
buttonsContainer.style.display = "none";
const containerDiv = document.querySelector('.container');
const welcomeMessagePara = document.createElement('p');
welcomeMessagePara.appendChild(document.createTextNode(`Welcome to Rock, Paper, Scissors!`));
welcomeMessagePara.appendChild(document.createElement('br'));
welcomeMessagePara.appendChild(document.createTextNode(`Let's play!`));
containerDiv.insertBefore(welcomeMessagePara, containerDiv.firstChild);
game(containerDiv);