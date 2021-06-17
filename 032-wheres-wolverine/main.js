const Game = (() => {
  let found = '';

  const img = document.querySelector('#bg');
  img.addEventListener('click', e => {
    // clean up old squares
    if (document.querySelector('.square')) {
      const oldSqare = document.querySelector('.square');
      oldSqare.remove();
    }
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.top = `${e.pageY - 50}px`;
    square.style.left = `${e.pageX - 50}px`;
    square.style.position = 'absolute';
    document.body.appendChild(square);
    console.log(e.pageX, e.pageY);

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

    if (
      e.pageX >= wolverine.left &&
      e.pageX <= wolverine.right &&
      e.pageY >= wolverine.top &&
      e.pageY <= wolverine.bottom
    ) {
      found = 'wolverine';
    } else if (
      e.pageX >= hulk.left &&
      e.pageX <= hulk.right &&
      e.pageY >= hulk.top &&
      e.pageY <= hulk.bottom
    ) {
      found = 'hulk';
    } else if (
      e.pageX >= spiderMan.left &&
      e.pageX <= spiderMan.right &&
      e.pageY >= spiderMan.top &&
      e.pageY <= spiderMan.bottom
    ) {
      found = 'spider-man';
    }
    console.log(found);
    found = '';
  });
})();
