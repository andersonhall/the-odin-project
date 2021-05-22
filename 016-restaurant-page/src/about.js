function loadAbout() {
  const main = document.querySelector('.main');
  main.textContent = '';

  const about = document.createElement('h3');
  about.style.textAlign = 'right';
  main.appendChild(about);
  about.textContent = 'Est. 2021 by Andy Hall';
}

export default loadAbout;
