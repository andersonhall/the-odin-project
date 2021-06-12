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
