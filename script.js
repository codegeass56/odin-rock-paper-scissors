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

  //Create element to display round details
  const roundDetailsPara = document.createElement('p');
  roundDetailsPara.classList.add('round-details');

  //Insert element before second child of main container
  const buttonsContainer = document.querySelector('.buttons');
  container.insertBefore(roundDetailsPara, container.children[1]);

  //Create element to display user-input-message
  const inputMessagePara = document.createElement('p');
  inputMessagePara.classList.add('user-input-message');
  container.appendChild(inputMessagePara);

  //Create element to display computer-choice-details
  const computerChoicePara = document.createElement('p');
  computerChoicePara.classList.add('computer-choice-details');
  container.appendChild(computerChoicePara);

  //Add event listeners to buttons
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click',
      () => {
        playRound(button.textContent, computerSelection);
      })
  });
  for (let i = 0; i < 1; i++) {
    roundDetailsPara.textContent = `Round ${i + 1}:`
    document.querySelector('.buttons').style.display = "block";

    inputMessagePara.textContent = `Select your choice (Rock, Paper or Scissors)`;

    let computerSelection = getComputerChoice();

    computerChoicePara.textContent = `Computer Choice: ${computerSelection}`;
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
//Get buttons container and hide it
const buttonsContainer = document.querySelector('.buttons');
buttonsContainer.style.display = "none";

//Get main container
const mainContainer = document.querySelector('.container');

//Create p element for welcome-message
const welcomeMessagePara = document.createElement('p');
welcomeMessagePara.classList.add('welcome-message');
welcomeMessagePara.appendChild(document.createTextNode(`Welcome to Rock, Paper, Scissors!`));
welcomeMessagePara.appendChild(document.createElement('br'));
welcomeMessagePara.appendChild(document.createTextNode(`Let's play!`));

//Set welcome message as first child of main container
mainContainer.insertBefore(welcomeMessagePara, mainContainer.firstChild);

//Begin game
game(mainContainer);