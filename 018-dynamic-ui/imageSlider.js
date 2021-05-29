const imageSlider = (() => {
  const container = document.querySelector('.img-container-inner');
  const prevBtn = document.querySelector('.left');
  const nextBtn = document.querySelector('.right');

  let index = 1;
  let translateX = 0;

  const previousSlide = () => {
    if (index !== 1) {
      container.style.transform = `translateX(${translateX + 600}px)`;
      index--;
      translateX += 600;
    }
  };

  const nextSlide = () => {
    if (index < images.length) {
      container.style.transform = `translateX(${translateX - 600}px)`;
      index++;
      translateX -= 600;
    }
  };

  prevBtn.addEventListener('click', previousSlide);
  nextBtn.addEventListener('click', nextSlide);

  const images = [
    {
      title: 'image one',
      url: './images/img1.jpg',
    },
    {
      title: 'image two',
      url: './images/img2.jpg',
    },
    {
      title: 'image three',
      url: './images/img3.jpg',
    },
    {
      title: 'image four',
      url: './images/img4.jpg',
    },
    {
      title: 'image five',
      url: './images/img5.jpg',
    },
  ];

  images.forEach(image => {
    container.innerHTML += `
      <img alt="${image.title}" src="${image.url}" width="600px"/>
    `;
  });
})();
