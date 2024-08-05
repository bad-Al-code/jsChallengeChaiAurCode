document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "73d99aea1fcc471daad50158240508";
  const cityInput = document.getElementById("city-input");
  const searchButton = document.getElementById("search-button");

  searchButton.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) {
      fetchWeatherData(city);
      fetchFiveDayForecast(city);
    }
  });

  /**
   * Fetch and dsiplay weather data for a given city
   * @param {string} city - The name of the city to getch weatehr data for
   */
  async function fetchWeatherData(city) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      // console.log(data);

      displayWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data: ", error);
    }
  }

  async function fetchFiveDayForecast(city) {
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("5-Day Weather Forecast: ", data);
    } catch (error) {
      console.error("Error fetchinf 5-day weatehr forecast: ", error);
    }
  }

  /**
   * Display weather data on teh web page
   * @param {Object} data - The weather data object
   */
  function displayWeatherData(data) {
    const cityName = document.getElementById("city-name");
    const temperature = document.getElementById("temperature");
    const condition = document.getElementById("condition");

    cityName.textContent = data.location.name;
    temperature.textContent = data.current.temp_c;
    condition.textContent = data.current.condition.text;
  }
});
