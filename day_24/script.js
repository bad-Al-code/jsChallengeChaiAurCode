document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "73d99aea1fcc471daad50158240508";
  const cityInput = document.getElementById("city-input");
  const searchButton = document.getElementById("search-button");
  const errorMessage = document.getElementById("error-message");

  searchButton.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) {
      clearError();
      fetchWeatherData(city);
      fetchFiveDayForecast(city);
    } else {
      displayError("Plase enter a city name.");
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
      if (data.error) {
        throw new Error(data.error.message);
      }

      displayWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data: ", error);
      displayError(
        "Unable to fetch weather data. Please check the city name and try again."
      );
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
      if (data.error) {
        throw new Error(data.error.message);
      }
      displayFiveDayForecast(data);
    } catch (error) {
      console.error("Error fetchinf 5-day weatehr forecast: ", error);
      displayError(
        "Unable to fetch 5-day forecast. Please check the city name and try again."
      );
    }
  }

  /**
   * Display error message on the web page
   * @param {string} message - The error message to display
   */
  function displayError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
  }

  /**
   * Clear any existing error message
   */
  function clearError() {
    errorMessage.textContent = "";
    errorMessage.style.display = "none";
  }

  /**
   * Display weather data on teh web page
   * @param {Object} data - The weather data object
   */
  function displayWeatherData(data) {
    const cityName = document.getElementById("city-name");
    const temperature = document.getElementById("temperature");
    const condition = document.getElementById("condition");
    const weatherIcon = document.getElementById("weather-icon");

    cityName.textContent = data.location.name;
    temperature.textContent = data.current.temp_c;
    condition.textContent = data.current.condition.text;

    const conditionCode = data.current.condition.code;
    weatherIcon.innerHTML = getWeatherIcon(conditionCode);
  }

  /**
   * Get weather icon based on condition code
   * @param {number} code - The condition code
   * @returns {string} - HTML string for the weather icon
   */
  function getWeatherIcon(code) {
    switch (true) {
      case code >= 1000 && code <= 1003:
        return `<img src="assets/sunny.svg" alt="Sunny">`;
      case code >= 1006 && code <= 1030:
        return `<img src="assets/cloudy.svg" alt="Cloudy">`;
      case code >= 1063 && code <= 1087:
        return `<img src="assets/rainy.svg" alt="Rainy">`;
      default:
        return "";
    }
  }

  /**
   * Display 5-Day weather forecast on web page
   * @param {Object} data - The forecast data object
   */
  function displayFiveDayForecast(data) {
    const forecastDetails = document.getElementById("forecast-details");
    forecastDetails.innerHTML = "";

    data.forecast.forecastday.forEach((day) => {
      const forecastDay = document.createElement("div");
      forecastDay.className = "forecast-day";
      forecastDay.innerHTML = `
        <h3>${new Date(day.date).toLocaleDateString("en-US", {
          weekday: "long",
        })}</h3>
        <p><strong>Temp:</strong> ${day.day.avgtemp_c}°C</p>
        <p><strong>Condition:</strong> ${day.day.condition.text}</p> 
      `;
      forecastDetails.appendChild(forecastDay);
    });
  }
});
