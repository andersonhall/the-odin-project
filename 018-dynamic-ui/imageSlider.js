const imageSlider = (() => {
  const container = document.querySelector('.img-container-inner');
  const prevBtn = document.querySelector('.left');
  const nextBtn = document.querySelector('.right');
  const navDotsContainer = document.querySelector('.nav-dots');

  let index = 1;
  let translateX = 0;

  const previousSlide = () => {
    if (index > 1) {
      translateX += 600;
      container.style.transform = `translateX(${translateX}px)`;
      index--;
    } else {
      index = images.length - 1;
      translateX = index * -600;
      container.style.transform = `translateX(${translateX}px)`;
      index++;
    }
  };

  const nextSlide = () => {
    clearInterval(autoPlay);
    if (index < images.length) {
      translateX -= 600;
      container.style.transform = `translateX(${translateX}px)`;
      index++;
    } else {
      index = 1;
      translateX = 0;
      container.style.transform = `translateX(${translateX}px)`;
    }
  };

  const autoScroll = () => {
    if (index < images.length) {
      translateX -= 600;
      container.style.transform = `translateX(${translateX}px)`;
      index++;
    } else {
      index = 1;
      translateX = 0;
      container.style.transform = `translateX(${translateX}px)`;
    }
  };

  const scrollToImage = e => {
    clearInterval(autoPlay);
    translateX = e.target.dataset.index * -600;
    container.style.transform = `translateX(${translateX}px)`;
    index = parseInt(e.target.dataset.id);
  };

  prevBtn.addEventListener('click', previousSlide);
  nextBtn.addEventListener('click', nextSlide);

  const images = [
    {
      id: 1,
      title: 'image one',
      url: './images/img1.jpg',
    },
    { id: 2, title: 'image two', url: './images/img2.jpg' },
    {
      id: 3,
      title: 'image three',
      url: './images/img3.jpg',
    },
    {
      id: 4,
      title: 'image four',
      url: './images/img4.jpg',
    },
    {
      id: 5,
      title: 'image five',
      url: './images/img5.jpg',
    },
  ];

  images.map((image, index) => {
    container.innerHTML += `
      <img alt="${image.title}" src="${image.url}" width="600px"/>
    `;
    navDotsContainer.innerHTML += `
      <i class="fas fa-circle nav-dot" data-id="${image.id}" data-index="${index}""></i>
    `;
  });

  const navDots = document.querySelectorAll('.nav-dot');
  navDots.forEach(navDot => {
    navDot.addEventListener('click', e => {
      scrollToImage(e);
    });
  });

  const autoPlay = setInterval(() => {
    autoScroll();
  }, 2000);
})();
