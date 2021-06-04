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
    iconCode = weatherData.weather[0].icon;

    const data = {
      current: weatherData.weather[0].main,
      iconUrl: `http://openweathermap.org/img/wn/${iconCode}@2x.png`,
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
    weather.innerHTML = `
      <div class="weather-info-header">
        <h2>Current Weather</h2>
        <p>${UI.displayTime()}</p>
      </div>
      <div class="weather-info-current">
        <div class="weather-info-left">
          <img src="${data.iconUrl}" alt="current weather" />
          <span>${data.temp.f}&#176</span>
        </div>
        <div class="weather-info-right">
          Feels like ${data.feelsLike.f}&#176
        </div>
      </div>
      <div class="weather-info-phrase">${data.current}</div>
      <div class="weather-info-details">
        <div class="weather-info-details-left">
          <div class="detail-item">
            <div>High</div>
            <div>${data.tempMax.f}&#176</div>
          </div>
          <div class="detail-item">
            <div>Low</div>
            <div>${data.tempMin.f}&#176</div>
          </div>
        </div>
        <div class="weather-info-details-right">
          <div class="detail-item">
            <div>Wind Direction</div>
            <div>${data.windDirection}&#176</div>
          </div>
          <div class="detail-item">
            <div>Wind Speed</div>
            <div>${parseFloat(data.windSpeed.mph).toFixed(1)} mph</div>
          </div>
          <div class="detail-item">
            <div>Humidity</div>
            <div>${data.humidity}%</div>
          </div>
        </div>
      </div>
    `;
  },

  displayTime: () => {
    const date = new Date();

    let hour = date.getHours();
    hour = (hour < 10 ? '0' : '') + hour;

    let min = date.getMinutes();
    min = (min < 10 ? '0' : '') + min;

    return (hour > 12 ? hour - 12 : hour) + ':' + min + (hour < 12 ? ' am' : ' pm');
  },
};

UI.init();
