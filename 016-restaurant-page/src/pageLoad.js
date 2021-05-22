import loadMenu from './menu';
import loadAbout from './about';

const pageLoad = function () {
  const content = document.querySelector('#content');
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  const div = document.createElement('div');
  const img = document.createElement('img');
  const h2 = document.createElement('h2');
  const logo = document.createElement('div');
  const headerRight = document.createElement('nav');
  const menuBtn = document.createElement('button');
  const aboutBtn = document.createElement('button');

  h1.textContent = 'Fresh n Fast';
  div.classList.add('main');
  img.src = 'hero-img.jpg';
  img.alt = 'hero-img';
  img.classList.add('hero-img');
  h2.classList.add('headline');
  h2.textContent = 'Let us handle dinner...';
  menuBtn.textContent = 'Menu';
  aboutBtn.textContent = 'About';
  menuBtn.classList.add('nav-btn');
  aboutBtn.classList.add('nav-btn');
  logo.classList.add('logo');

  content.appendChild(header);
  header.appendChild(logo).appendChild(h1);
  header.appendChild(headerRight).appendChild(menuBtn);
  headerRight.appendChild(aboutBtn);
  content.appendChild(div);
  div.appendChild(img);
  div.appendChild(h2);

  logo.addEventListener('click', loadHome);
  menuBtn.addEventListener('click', loadMenu);
  aboutBtn.addEventListener('click', loadAbout);
};

function loadHome() {
  const content = document.querySelector('#content');
  content.textContent = '';
  pageLoad();
}

export default pageLoad;
