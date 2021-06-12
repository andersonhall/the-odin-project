import Gameboard from '../modules/Gameboard';
import Ship from '../modules/Ship';

test('can place ship with length = 1', () => {
  const g = Gameboard();
  g.placeShip(Ship(1), true, 0, 0);
  expect(g.locations[0][0]).toBe(1);
});

test('can place ship horizontally with length > 1', () => {
  const g = Gameboard();
  g.placeShip(Ship(3), true, 0, 0);
  expect(g.locations[0][2]).toBe(1);
});

test('can place ship vertically with length > 1', () => {
  const g = Gameboard();
  g.placeShip(Ship(3), false, 0, 0);
  expect(g.locations[2][0]).toBe(1);
});

test('cannot place horizontally too close to edge', () => {
  const g = Gameboard();
  expect(() => {
    g.placeShip(Ship(3), true, 0, 8);
  }).toThrow('You cannot place a ship here');
});

test('cannot place vertically too close to edge', () => {
  const g = Gameboard();
  expect(() => {
    g.placeShip(Ship(3), false, 8, 0);
  }).toThrow('You cannot place a ship here');
});

test('cannot overlap another ship horizontally', () => {
  const g = Gameboard();
  g.locations[0][0] = 1;
  expect(() => {
    g.placeShip(Ship(3), true, 0, 0);
  }).toThrow('You cannot place a ship here');
});

test('cannot overlap another ship vertically', () => {
  const g = Gameboard();
  g.locations[2][0] = 1;
  expect(() => {
    g.placeShip(Ship(3), false, 0, 0);
  }).toThrow('You cannot place a ship here');
});

test('increases hits to win when a ship is placed', () => {
  const g = Gameboard();
  const s = Ship(5);
  g.placeShip(s, true, 0, 0);
  expect(g.hitsToWin).toBe(5);
});

// ATTACK logic
// empty = 0, ship = 1, hit = 2, miss = 3
test('marks a space empty if an attack misses', () => {
  const g = Gameboard();
  g.receiveAttack([0, 0]);
  expect(g.locations[0][0]).toBe(3);
});

test('marks a space as hit if an attack hits', () => {
  const g = Gameboard();
  const s = Ship(3);
  g.placeShip(s, true, 0, 0);
  g.receiveAttack([0, 2]);
  expect(g.locations[0][2]).toBe(2);
});

test('game is over when all ships have been sunk', () => {
  const g = Gameboard();
  const s1 = Ship(2);
  const s2 = Ship(3);
  g.placeShip(s1, true, 0, 0);
  g.placeShip(s2, true, 1, 0);
  g.receiveAttack([0, 0]);
  g.receiveAttack([0, 1]);
  g.receiveAttack([1, 0]);
  g.receiveAttack([1, 1]);
  g.receiveAttack([1, 2]);
  expect(g.isGameOver()).toBe(true);
});
