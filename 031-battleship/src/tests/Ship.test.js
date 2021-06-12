import Ship from '../modules/Ship';
import Gameboard from '../modules/Gameboard';

test('accepts a hit', () => {
  const ship = Object.create(Ship(4));
  ship.hit();
  expect(ship.hits).toEqual(1);
});

test('does not sink if hits < length', () => {
  const ship = Object.create(Ship(3));
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(false);
});

test('sinks if hits equals length', () => {
  const ship = Object.create(Ship(2));
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});

test('stores correct coordinates when placed horizontally', () => {
  const ship = Object.create(Ship(3));
  const g = Gameboard();
  g.placeShip(ship, true, 0, 0);
  expect(ship.coordinates).toEqual([
    [0, 0],
    [0, 1],
    [0, 2],
  ]);
});

test('stores correct coordinates when placed vertically', () => {
  const ship = Object.create(Ship(3));
  const g = Gameboard();
  g.placeShip(ship, false, 0, 0);
  expect(ship.coordinates).toEqual([
    [0, 0],
    [1, 0],
    [2, 0],
  ]);
});
