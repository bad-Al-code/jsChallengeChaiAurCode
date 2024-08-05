document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "73d99aea1fcc471daad50158240508";
  const city = "Delhi";
  const weatherApiURL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  async function fetchWeatherData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      //   console.log(data);

      displayWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data: ", error);
    }
  }

  function displayWeatherData(data) {
    const cityName = document.getElementById("city-name");
    const temperature = document.getElementById("temperature");
    const condition = document.getElementById("condition");

    cityName.textContent = data.location.name;
    temperature.textContent = data.current.temp_c;
    condition.textContent = data.current.condition.text;
  }

  fetchWeatherData(weatherApiURL);
});
