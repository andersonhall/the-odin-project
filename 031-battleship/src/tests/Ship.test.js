import Ship from '../modules/Ship';

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
