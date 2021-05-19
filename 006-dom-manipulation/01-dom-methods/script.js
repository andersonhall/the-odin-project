const p = document.createElement('p');
p.style.color = 'red';
p.textContent = "Hey I'm red!";

const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = "I'm a blue h3!";

const div = document.createElement('div');
div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
div.appendChild(h1);

const p2 = document.createElement('p');
p2.textContent = 'ME TOO!';
div.appendChild(p2);

const container = document.querySelector('#container');
container.appendChild(p);
container.appendChild(h3);
container.appendChild(div);
