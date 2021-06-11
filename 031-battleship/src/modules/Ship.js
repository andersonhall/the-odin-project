const Ship = length => {
  const ship = {};
  ship.length = length;
  ship.hits = [];
  ship.isSunk = () => ship.hits.length === length;
  ship.hit = location => ship.hits.push(location);

  return ship;
};

export default Ship;
