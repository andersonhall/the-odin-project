const Ship = length => {
  const ship = {};
  ship.length = length;
  ship.hits = 0;
  ship.isSunk = () => ship.hits === length;
  ship.hit = () => ship.hits++;
  ship.coordinates = [];

  return ship;
};

export default Ship;
