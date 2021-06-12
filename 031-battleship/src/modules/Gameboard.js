const Gameboard = () => {
  const g = {};
  g.locations = [];
  g.hitCount = 0;
  g.hitsToWin = 0;

  for (let i = 0; i < 10; i++) {
    g.locations[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }

  g.isGameOver = () => g.hitCount === g.hitsToWin;

  g.receiveAttack = coordinates => {
    const row = coordinates[0];
    const col = coordinates[1];
    if (g.locations[row][col] === 0) {
      //miss
      g.locations[row][col] = 3;
    } else if (g.locations[row][col] === 1) {
      // hit
      g.locations[row][col] = 2;
      g.hitCount++;
    }
    g.isGameOver();
  };

  g.placeShip = (ship, isHorizontal, row, col) => {
    if (isHorizontal) {
      // goes past the edge?
      if (col + ship.length > 9) {
        throw new Error('You cannot place a ship here');
      }
      // overlap another ship?
      let checkCol = col;
      for (let i = 0; i < ship.length; i++) {
        if (g.locations[row][checkCol] !== 0) {
          throw new Error('You cannot place a ship here');
        }
        checkCol++;
      }
      // place the ship
      for (let i = 0; i < ship.length; i++) {
        g.locations[row][col] = 1;
        ship.coordinates.push([row, col]);
        col++;
        g.hitsToWin++;
      }
    } else {
      // goes past the edge?
      if (row + ship.length > 9) {
        throw new Error('You cannot place a ship here');
      }
      // overlap another ship?
      let checkRow = row;
      for (let i = 0; i < ship.length; i++) {
        if (g.locations[checkRow][col] !== 0) {
          throw new Error('You cannot place a ship here');
        }
        checkRow++;
      }
      // place the ship
      for (let i = 0; i < ship.length; i++) {
        g.locations[row][col] = 1;
        ship.coordinates.push([row, col]);
        row++;
        g.hitsToWin++;
      }
    }
  };

  return g;
};

export default Gameboard;
