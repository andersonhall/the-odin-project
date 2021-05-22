function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  menu.appendChild(createMenuItem('Basil Fried Rice', 'Spicy and full of flavor'));
  menu.appendChild(createMenuItem('Egg Rolls', 'Hot and full of pork and delicious veggies'));

  return menu;
}

function createMenuItem(name, description) {
  const item = document.createElement('div');
  item.classList.add('menu-item');

  const itemName = document.createElement('h2');
  itemName.textContent = name;

  const itemDescription = document.createElement('p');
  itemDescription.textContent = description;

  // images
  // const itemImg = document.createElement('img');
  // itemImg.src = `images/food/${name.join(' ').toLowerCase()}.jpg`;
  // itemImg.alt = `${name}`;

  item.appendChild(itemName);
  item.appendChild(itemDescription);

  return item;
}

function loadMenu() {
  const main = document.querySelector('.main');
  main.textContent = '';
  main.appendChild(createMenu());
}

export default loadMenu;
