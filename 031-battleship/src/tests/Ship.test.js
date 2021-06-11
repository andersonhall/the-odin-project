import Ship from '../modules/Ship';

test('accepts a hit', () => {
  const ship = Object.create(Ship(4));
  ship.hit(2);
  expect(ship.hits).toEqual([2]);
});

test('does not sink if hits < length', () => {
  const ship = Object.create(Ship(3));
  ship.hit(1);
  ship.hit(2);
  expect(ship.isSunk()).toBe(false);
});

test('sinks if hits equals length', () => {
  const ship = Object.create(Ship(2));
  ship.hit(1);
  ship.hit(2);
  expect(ship.isSunk()).toBe(true);
});
