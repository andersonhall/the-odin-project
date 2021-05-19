function computerPlay() {
  const options = ['rock', 'paper', 'scissors'];
  const random = Math.floor(Math.random() * 3);
  return options[random];
}

function playerPlay() {
  let playerSelection = prompt('Enter one of the following: rock, paper, or scissors');
  while (
    playerSelection.toLowerCase() !== 'rock' &&
    playerSelection.toLowerCase() !== 'paper' &&
    playerSelection.toLowerCase() !== 'scissors'
  ) {
    playerSelection = prompt('Enter a valid choice: rock, paper, or scissors');
  }
  return playerSelection;
}

function playRound() {
  const computerSelection = computerPlay();
  const playerSelection = playerPlay();

  switch (computerSelection) {
    case 'rock':
      switch (playerSelection.toLowerCase()) {
        case 'rock':
          console.log('Tie!');
        case 'paper':
          console.log('You win! Paper beats rock.');
        case 'scissors':
          console.log('You lose! Rock beats scissors.');
        default:
          return;
      }
    case 'paper':
      switch (playerSelection.toLowerCase()) {
        case 'rock':
          console.log('You lose! Paper beats rock.');
        case 'paper':
          console.log('Tie!');
        case 'scissors':
          console.log('You win! Scissors beats rock.');
        default:
          return;
      }
    case 'scissors':
      switch (playerSelection.toLowerCase()) {
        case 'rock':
          console.log('You win! Rock beats scissors.');
        case 'paper':
          console.log('You lose! Scissors beats paper.');
        case 'scissors':
          console.log('Tie!');
        default:
          return;
      }
  }
}

for (i = 0; i < 5; i++) {
  playRound();
}
