const API = {
  fetchWeather: async () => {
    const input = document.querySelector('#city');
    const location = input.value;

    const response =
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8a218ba270b320c98e0f9280e5512221
    `)
        .then(res => {
          return res.json();
        })
        .then(data => {
          return API.processData(data);
        })
        .then(processedData => {
          UI.displayData(processedData);
        })
        .catch(err => {
          console.log(err);
        });
  },
  processData: weatherData => {
    const data = {
      current: weatherData.weather[0].main,
      tempMin: {
        f: Math.round((weatherData.main.temp_min - 273.15) * (9 / 5) + 32),
        c: Math.round(weatherData.main.temp_min - 273.15),
      },
      tempMax: {
        f: Math.round((weatherData.main.temp_max - 273.15) * (9 / 5) + 32),
        c: Math.round(weatherData.main.temp_min - 273.15),
      },
      temp: {
        f: Math.round((weatherData.main.temp - 273.15) * (9 / 5) + 32),
        c: Math.round(weatherData.main.temp - 273.15),
      },
      feelsLike: {
        f: Math.round((weatherData.main.feels_like - 273.15) * (9 / 5) + 32),
        c: Math.round(weatherData.main.feels_like - 273.15),
      },
      humidity: weatherData.main.humidity,
      windSpeed: {
        mps: weatherData.wind.speed,
        mph: weatherData.wind.speed * 2.237,
      },
      windDirection: weatherData.wind.deg,
    };

    return data;
  },
};

const UI = {
  init: () => {
    const form = document.querySelector('#form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      API.fetchWeather();
    });
  },

  displayData: data => {
    const weather = document.querySelector('.weather-info');
    weather.innerHTML = '';
    console.log(data);
  },
};

UI.init();
