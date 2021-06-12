import Ship from '../modules/Ship';

const Player = playerType => {
  const p = {};
  p.type = playerType;
  p.ships = [Ship(2), Ship(2), Ship(3), Ship(4), Ship(5)];
  p.fireShot = (opponentBoard, coordinates) => {
    opponentBoard.receiveAttack(coordinates);
  };
  p.takeTurn = opponentBoard => {
    if (p.type === 'computer') {
      const row = Math.floor(Math.random() * opponentBoard.locations.length);
      const col = Math.floor(Math.random() * opponentBoard.locations[0].length);
      if (opponentBoard.locations[row][col] > 1) {
        p.takeTurn(opponentBoard);
      } else {
        p.fireShot(opponentBoard, [row, col]);
      }
    }
  };

  return p;
};

export default Player;
