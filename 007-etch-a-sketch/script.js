function buildGrid(n) {
  const container = document.querySelector('.container');
  container.setAttribute('style', `grid-template-columns: repeat(${n}, 1fr)`);
  for (i = 0; i < n * n; i++) {
    const square = document.createElement('div');
    square.setAttribute('data-id', `${i}`);
    container.appendChild(square);
    square.classList.add('grid-square');
  }

  const squares = document.querySelectorAll('.grid-square');
  squares.forEach(square => {
    square.addEventListener('mouseenter', colorize);
  });
}

function colorize() {
  const id = this.getAttribute('data-id');
  const square = document.querySelector(`[data-id='${id}']`);
  square.style.backgroundColor = currentColor;
}

function chooseColor() {
  let color = prompt('choose a color');
  currentColor = color;
}

function clearGrid() {
  const container = document.querySelector('.container');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  const gridSize = prompt(
    `How many squares wide would you like to make the grid? (${maxSize} or less)`
  );
  if (gridSize < 1 || gridSize > maxSize || Number.isNaN(gridSize)) {
    alert(`enter a number between 1 and ${maxSize}`);
    clearGrid();
  }
  buildGrid(gridSize);
}
let maxSize = 100;
let currentColor = 'red';
buildGrid(4);
