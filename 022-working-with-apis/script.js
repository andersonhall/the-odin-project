const img = document.querySelector('img');
const btn = document.querySelector('button');
const input = document.querySelector('input');

const fetchGif = () => {
  const searchTerm = input.value;

  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=Lp76GRxgFjYRlzBCJ1QDD3Wl9b64bvdC&s=${searchTerm}`,
    {
      mode: 'cors',
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    })
    .catch((err, response) => {
      console.log(err);
      img.src = './default-img.gif';
    });
};

btn.addEventListener('click', fetchGif);

fetchGif();
