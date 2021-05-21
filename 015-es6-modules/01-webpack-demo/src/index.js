import myName from './myName';

function component() {
  const element = document.createElement('div');

  element.innerHTML = myName('Andy');
  return element;
}

document.body.appendChild(component());
