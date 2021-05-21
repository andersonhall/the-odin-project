const Player = sign => {
  this.sign = sign;

  const getSign = () => sign;

  return { getSign };
};

const gameBoard = (() => {
  const board = ['', '', '', '', '', '', '', '', ''];

  const setSquare = (index, sign) => {
    if (index <= board.length) {
      board[index] = sign;
    }
  };

  const getSquare = index => {
    if (index <= board.length) {
      return board[index];
    }
  };

  const reset = () => {
    for (let i = 0; i < board.length; i++) {
      board[i] = '';
    }
  };

  return { setSquare, getSquare, reset };
})();

const displayController = (() => {
  const squares = document.querySelectorAll('.square');
  const messageEl = document.querySelector('.message');
  const restartBtn = document.querySelector('.restart');

  squares.forEach(square => {
    square.addEventListener('click', e => {
      if (!gameController.getIsOver() && e.target.textContent === '') {
        gameController.playRound(parseInt(e.target.dataset.index));
        updateGameboard();
      }
    });
  });

  restartBtn.addEventListener('click', e => {
    gameBoard.reset();
    gameController.reset();
    updateGameboard();
    setMessageEl("Player X's Turn");
  });

  const updateGameboard = () => {
    for (let i = 0; i < squares.length; i++) {
      squares[i].textContent = gameBoard.getSquare(i);
    }
  };

  const setResultMessage = winner => {
    if (winner === 'Draw') {
      setMessageEl("It's a draw!");
    } else {
      setMessageEl(`Player ${winner} has won!`);
    }
  };

  const setMessageEl = message => {
    messageEl.textContent = message;
  };

  return { setResultMessage, setMessageEl };
})();

const gameController = (() => {
  const playerX = Player('X');
  const playerO = Player('O');
  let round = 1;
  let isOver = false;

  const getCurrentPlayer = () => {
    return round % 2 === 1 ? playerX.getSign() : playerO.getSign();
  };

  const playRound = squareIndex => {
    gameBoard.setSquare(squareIndex, getCurrentPlayer());
    if (checkWinner(squareIndex)) {
      displayController.setResultMessage(getCurrentPlayer());
      isOver = true;
      return;
    }
    if (round === 9) {
      displayController.setResultMessage('Draw');
      isOver = true;
      return;
    }
    round++;
    displayController.setMessageEl(`Player ${getCurrentPlayer()}'s turn`);
  };

  const checkWinner = squareIndex => {
    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return wins
      .filter(combo => combo.includes(squareIndex))
      .some(possibleCombo =>
        possibleCombo.every(index => gameBoard.getSquare(index) === getCurrentPlayer())
      );
  };

  const getIsOver = () => {
    return isOver;
  };

  const reset = () => {
    round = 1;
    isOver = false;
  };

  return { getIsOver, playRound, reset };
})();
