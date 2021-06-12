import Player from '../modules/Player';
import Gameboard from '../modules/Gameboard';
import Ship from '../modules/Ship';

test('starts with 5 ships', () => {
  const p = Player();
  expect(p.ships).toHaveLength(5);
});

test('can fire a shot', () => {
  const p = Player();
  const g = Gameboard();
  p.fireShot(g, [0, 0]);
  expect(g.locations[0][0]).toBe(3);
});

test('cannot fire in the same location twice', () => {
  const p = Player();
  const g = Gameboard();
  g.locations[0][0] = 3;
  p.fireShot(g, [0, 0]);
  expect(g.locations[0][0]).toBe(3);
});

test('computer player can take a turn', () => {
  const p = Player('computer');
  const g = Gameboard();
  p.takeTurn(g);
  expect(g.locations).toStrictEqual(expect.arrayContaining([expect.arrayContaining([3])]));
});

test('computer player makes legal moves only', () => {
  const p = Player('computer');
  const g = Gameboard();
  for (let i = 0; i < 100; i++) {
    p.takeTurn(g);
  }
  expect(g.locations).toStrictEqual(Array(10).fill(Array(10).fill(3)));
});

test('game end is checked after a human turn is taken', () => {
  const p = Player();
  const g = Gameboard();
  const s = Ship(1);
  g.placeShip(s, true, 0, 0);
  p.fireShot(g, [0, 0]);
  expect(g.isGameOver()).toBe(true);
});

test('game end is checked after a computer turn is taken', () => {
  const p = Player('computer');
  const g = Gameboard();
  g.hitsToWin = 1;
  for (let i = 0; i < 10; i++) {
    g.locations[i] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  }
  p.fireShot(g, [0, 0]);
  expect(g.isGameOver()).toBe(true);
});
