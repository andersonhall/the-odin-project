const dropdown = (() => {
  const nav = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.fa-bars');

  const toggleNav = e => {
    nav.style.transform =
      nav.style.transform === 'translateY(0px)' ? 'translateY(-100%)' : 'translateY(0px)';
  };

  hamburger.addEventListener('click', toggleNav);

  const links = [
    {
      text: 'Google',
      url: 'https://www.google.com',
    },
    { text: 'Facebook', url: 'https://www.facebook.com' },
    { text: 'YouTube', url: 'https://www.youtube.com' },
  ];

  links.forEach(link => {
    const li = document.createElement('li');

    li.innerHTML = `
      <a href='${link.url}' class='nav-link'>${link.text}</a>
    `;

    nav.appendChild(li);
  });
})();
