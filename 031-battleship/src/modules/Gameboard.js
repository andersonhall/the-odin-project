const Gameboard = () => {
  const g = {};
  g.locations = [];
  for (let i = 0; i < 10; i++) {
    g.locations[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }
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
        col++;
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
        row++;
      }
    }
  };

  return g;
};

export default Gameboard;
