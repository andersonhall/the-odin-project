const Game = (() => {
  let found = '';

  const img = document.querySelector('#bg');
  img.addEventListener('click', e => {
    // save click pos
    const y = e.pageY;
    const x = e.pageX;

    // clean up old squares
    if (document.querySelector('.square')) {
      const oldSquare = document.querySelector('.square');
      oldSquare.remove();
      const oldDropdown = document.querySelector('.drop-down');
      oldDropdown.remove();
    } else {
      // create square around clicked area
      const square = document.createElement('div');
      square.classList.add('square');
      square.style.top = `${e.pageY - 50}px`;
      square.style.left = `${e.pageX - 50}px`;
      square.style.position = 'absolute';
      document.body.appendChild(square);

      // create dropdown with character selection
      const dropDown = document.createElement('ul');
      dropDown.classList.add('drop-down');
      dropDown.style.top = `${e.pageY + 50}px`;
      dropDown.style.left = `${e.pageX - 50}px`;
      dropDown.style.position = 'absolute';
      dropDown.innerHTML = `
      <ul><button class='find-btn wolverine-btn'>Wolverine</button></ul>
      <ul><button class='find-btn hulk-btn'>Hulk</button></ul>
      <ul><button class='find-btn spider-man-btn'>Spider-man</button></ul>
    `;
      document.body.appendChild(dropDown);

      // set up button event listeners
      const btns = document.querySelectorAll('.find-btn');
      btns.forEach(btn => {
        btn.addEventListener('click', e => checkAnswer(e.target.textContent));
      });

      // set character squares
      const wolverineEl = document.querySelector('.wolverine');
      const wolverine = {
        top: wolverineEl.getBoundingClientRect().top + window.scrollY,
        bottom: wolverineEl.getBoundingClientRect().bottom + window.scrollY,
        left: wolverineEl.getBoundingClientRect().left + window.scrollX,
        right: wolverineEl.getBoundingClientRect().right + window.scrollX,
      };

      const hulkEl = document.querySelector('.hulk');
      const hulk = {
        top: hulkEl.getBoundingClientRect().top + window.scrollY,
        bottom: hulkEl.getBoundingClientRect().bottom + window.scrollY,
        left: hulkEl.getBoundingClientRect().left + window.scrollX,
        right: hulkEl.getBoundingClientRect().right + window.scrollX,
      };

      const spiderManEl = document.querySelector('.spider-man');
      const spiderMan = {
        top: spiderManEl.getBoundingClientRect().top + window.scrollY,
        bottom: spiderManEl.getBoundingClientRect().bottom + window.scrollY,
        left: spiderManEl.getBoundingClientRect().left + window.scrollX,
        right: spiderManEl.getBoundingClientRect().right + window.scrollX,
      };

      const checkAnswer = characterName => {
        const character = characterName.toLowerCase();

        // remove square
        const square = document.querySelector('.square');
        const dropDown = document.querySelector('.drop-down');
        square.remove();
        dropDown.remove();

        // check for found character
        if (
          character === 'wolverine' &&
          x >= wolverine.left &&
          x <= wolverine.right &&
          y >= wolverine.top &&
          y <= wolverine.bottom
        ) {
          found = 'wolverine';
        } else if (
          character === 'hulk' &&
          x >= hulk.left &&
          x <= hulk.right &&
          y >= hulk.top &&
          y <= hulk.bottom
        ) {
          found = 'hulk';
        } else if (
          character === 'spider-man' &&
          x >= spiderMan.left &&
          x <= spiderMan.right &&
          y >= spiderMan.top &&
          y <= spiderMan.bottom
        ) {
          found = 'spider-man';
        }
        if (found !== '') {
          alert(`you found ${found}`);
        }
        found = '';
      };
    }
  });
})();
