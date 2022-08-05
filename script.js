//Randomly get a selection from the array of choices
function getComputerChoice() {
  const choices = [`Rock`, `Paper`, `Scissors`];

  return choices[Math.floor(Math.random() * 3)];
}

//Play a round and return the winner
function playRound(playerSelection, computerSelection) {

  //Set the parameters to equal case for comparison
  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerSelection.toUpperCase();

  //Depending on game rules, set and return the winner
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
  return winner;
}

//Create and append UI elements for displaying different text content
function createAndAppendUIElements() {
  //Get main container
  let container = document.querySelector('.container');

  //Create element to display user-input-message
  const inputMessagePara = document.createElement('p');
  inputMessagePara.classList.add('user-input-message');
  container.appendChild(inputMessagePara);

  //Create element to display computer-choice-details
  const computerChoicePara = document.createElement('p');
  computerChoicePara.classList.add('computer-choice-details');
  container.appendChild(computerChoicePara);

  //Create element to display round-result
  const roundResultPara = document.createElement('p');
  roundResultPara.classList.add('round-result');
  container.appendChild(roundResultPara);

  //Create element to display current-player-score
  const playerScorePara = document.createElement('p');
  playerScorePara.classList.add('current-player-score');
  container.appendChild(playerScorePara);

  //Create element to display current-computer-score
  const computerScorePara = document.createElement('p');
  computerScorePara.classList.add('current-computer-score');
  container.appendChild(computerScorePara);

  //Create element to display end-game-message
  const gameEndMessagePara = document.createElement('p');
  gameEndMessagePara.classList.add('game-end-message');
  container.appendChild(gameEndMessagePara);
}

function checkIfGameEnded(playerScore, computerScore) {
  //Get main container
  let container = document.querySelector('.container');
  //Check if either player has reached five points
  if (playerScore === 5 || computerScore === 5) {
    //Hide elements
    document.querySelector('.buttons').style.display = "none";
    document.querySelector('.user-input-message').style.display = "none";
    document.querySelector('.computer-choice-details').style.display = "none";
    document.querySelector('.welcome-message').style.display = "none";

    //Display message depending on game winner
    if (playerScore === 5) {
      document.querySelector('.game-end-message').textContent = `Well Played! You win the game!`;
    } else if (computerScore === 5) {
      document.querySelector('.game-end-message').textContent = `Game Over! You lose!`;
    }

    //Add restart button that would refresh the page and restart the game
    let restartButton = document.createElement('button');
    restartButton.textContent = 'Restart the game?';
    restartButton.addEventListener('click', () => location.reload());
    container.appendChild(restartButton);
  }
}

//Begin the game
function game(container) {
  //Initialize scores of player and computer
  let playerScore = 0;
  let computerScore = 0;

  createAndAppendUIElements();

  //Make the buttons visible
  document.querySelector('.buttons').style.display = "block";

  //Display user input message
  document.querySelector('.user-input-message').textContent = `Select your choice (Rock, Paper or Scissors)`;

  //Select all button elements into an array
  const buttons = document.querySelectorAll('button');

  //Add event listener to each button
  buttons.forEach((button) => {
    button.addEventListener('click',
      () => {
        //Get the computer selection and display it
        let computerSelection = getComputerChoice();
        document.querySelector('.computer-choice-details').textContent = `Computer Choice: ${computerSelection}`;

        //Play a round and get the winner
        let winner = playRound(button.textContent, computerSelection);

        //Depending on the winner, update the score and display the round result
        if (winner === `Player`) {
          playerScore++;
          document.querySelector('.round-result').textContent = `You win the round! ${button.textContent} beats 
            ${computerSelection}!`;
        } else if (winner === `Computer`) {
          computerScore++;
          document.querySelector('.round-result').textContent = `You lose the round! ${computerSelection} beats 
            ${button.textContent}!`;
        } else {
          document.querySelector('.round-result').textContent = `This round is a tie! ${button.textContent} does 
            not beat ${computerSelection}!`;
        }

        //Display the current game score
        document.querySelector('.current-player-score').textContent = `Player Score: ${playerScore}`;
        document.querySelector('.current-computer-score').textContent = `Computer Score: ${computerScore}`;

        checkIfGameEnded(playerScore, computerScore);
      })
  });
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