function computerPlay() {
  const options = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * 3);
  return options[random];
}

function playRound(playerSelection) {
  const computerSelection = computerPlay();

  switch (computerSelection) {
    case 'rock':
      switch (playerSelection.toLowerCase()) {
        case 'rock':
          printResult('Tie!');
        case 'paper':
          playerScore++;
          printResult('You win! Paper beats rock.');
          checkForGameOver();
          return;
        case 'scissors':
          cpuScore++;
          printResult('You lose! Rock beats scissors.');
          checkForGameOver();
        default:
          return;
      }
    case 'paper':
      switch (playerSelection.toLowerCase()) {
        case 'rock':
          cpuScore++;
          printResult('You lose! Paper beats rock.');
          checkForGameOver();
          return;
        case 'paper':
          printResult('Tie!');
          return;
        case 'scissors':
          playerScore++;
          printResult('You win! Scissors beats paper.');
          checkForGameOver();
          return;
        default:
          return;
      }
    case 'scissors':
      switch (playerSelection.toLowerCase()) {
        case 'rock':
          playerScore++;
          printResult('You win! Rock beats scissors.');
          checkForGameOver();
          return;
        case 'paper':
          cpuScore++;
          printResult('You lose! Scissors beats paper.');
          checkForGameOver();
          return;
        case 'scissors':
          printResult('Tie!');
          return;
        default:
          return;
      }
  }
}

function printResult(message) {
  let score = `CPU: ${cpuScore} | Player ${playerScore}`;
  resultsContainer.textContent = `${message} ${score}`;
}

function checkForGameOver() {
  if (playerScore === 5 || cpuScore === 5) {
    resultsContainer.textContent = `Game Over. CPU: ${cpuScore} | Player: ${playerScore}`;
    buttons.forEach(button => {
      button.style.display = 'none';
    });
  }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', () => playRound(button.textContent));
});

const resultsContainer = document.querySelector('.results');
let cpuScore = 0;
let playerScore = 0;
