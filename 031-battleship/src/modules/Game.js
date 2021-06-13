import Gameboard from '../modules/Gameboard';
import Player from '../modules/Player';

const Game = () => {
  const game = {};
  game.p1 = Player();
  game.p2 = Player('computer');
  game.g1 = Gameboard();
  game.g2 = Gameboard();

  game.g1.placeShip(game.p1.ships[0], true, 1, 1);
  game.g1.placeShip(game.p1.ships[1], false, 5, 8);
  game.g1.placeShip(game.p1.ships[2], true, 3, 5);
  game.g1.placeShip(game.p1.ships[3], false, 4, 1);
  game.g1.placeShip(game.p1.ships[4], true, 8, 3);

  game.g2.placeShip(game.p2.ships[0], true, 0, 1);
  game.g2.placeShip(game.p2.ships[1], false, 2, 2);
  game.g2.placeShip(game.p2.ships[2], true, 3, 5);
  game.g2.placeShip(game.p2.ships[3], false, 5, 0);
  game.g2.placeShip(game.p2.ships[4], true, 8, 3);

  return game;
};

export default Game;
