document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "73d99aea1fcc471daad50158240508";
  const cityInput = document.getElementById("city-input");
  const searchButton = document.getElementById("search-button");
  const errorMessage = document.getElementById("error-message");
  const loadingIndicator = document.getElementById("loading");
  const locationButton = document.getElementById("location-button");
  const historyList = document.getElementById("history-list");
  const unitRadios = document.querySelectorAll('input[name="unit"]');

  loadSearchHistory();

  let unit = "C";

  /**
   * Event listener for the search button. Fetches weather data and updates search history.
   */
  searchButton.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) {
      clearError();
      showLoading();
      fetchWeatherData(city);
      fetchFiveDayForecast(city);
      addCityToHistory(city);
    } else {
      displayError("Please enter a city name.");
    }
  });

  /**
   * Event listener for the location button. Fetches weather data based on the current location.
   */
  locationButton.addEventListener("click", () => {
    if (navigator.geolocation) {
      clearError();
      showLoading();
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          fetchWeatherDataByCoordinates(lat, lon);
          fetchFiveDayForecastByCoordinates(lat, lon);
        },
        (error) => {
          console.error("Error getting location: ", error);
          displayError("Unable to get current location.");
        },
        { timeout: 10000 }
      );
    } else {
      displayError("Geolocation is not supported by this browser.");
    }
  });

  /**
   * Load search history from localStorage and display it in the history list.
   */
  function loadSearchHistory() {
    const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    historyList.innerHTML = "";
    history.forEach((city) => {
      const listItem = document.createElement("li");
      listItem.textContent = city;
      listItem.addEventListener("click", () => {
        cityInput.value = city;
        searchButton.click();
      });
      historyList.appendChild(listItem);
    });
  }

  /**
   * Add a city to search history and update localStorage.
   * @param {string} city - The city to add to history.
   */
  function addCityToHistory(city) {
    let history = JSON.parse(localStorage.getItem("searchHistory")) || [];
    if (!history.includes(city)) {
      history.push(city);
      localStorage.setItem("searchHistory", JSON.stringify(history));
      loadSearchHistory();
    }
  }

  /**
   * Fetch and display weather data for a given city.
   * @param {string} city - The name of the city to fetch weather data for.
   */
  async function fetchWeatherData(city) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&units=${unit}`;

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
    } finally {
      hideLoading();
    }
  }

  /**
   * Fetch and display 5-day weather forecast for a given city.
   * @param {string} city - The name of the city to fetch the 5-day forecast for.
   */
  async function fetchFiveDayForecast(city) {
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&units=${unit}`;

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
      console.error("Error fetching 5-day weather forecast: ", error);
      displayError(
        "Unable to fetch 5-day forecast. Please check the city name and try again."
      );
    } finally {
      hideLoading();
    }
  }

  /**
   * Fetch and display weather data for given coordinates.
   * @param {number} lat - The latitude of the location.
   * @param {number} lon - The longitude of the location.
   */
  async function fetchWeatherDataByCoordinates(lat, lon) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}&units=${unit}`;

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
      console.error("Error fetching weather data by coordinates: ", error);
      displayError(
        "Unable to fetch weather data by current location. Please try again."
      );
    } finally {
      hideLoading();
    }
  }

  /**
   * Fetch and display 5-day weather forecast for given coordinates.
   * @param {number} lat - The latitude of the location.
   * @param {number} lon - The longitude of the location.
   */
  async function fetchFiveDayForecastByCoordinates(lat, lon) {
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lon}&days=5&units=${unit}`;

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
      console.error(
        "Error fetching 5-day weather forecast by coordinates: ",
        error
      );
      displayError(
        "Unable to fetch 5-day forecast by current location. Please try again."
      );
    } finally {
      hideLoading();
    }
  }

  /**
   * Display weather data on the page.
   * @param {Object} data - The weather data to display.
   */
  function displayWeatherData(data) {
    const temperatureElement = document.getElementById("temperature");
    const cityNameElement = document.getElementById("city-name");
    const conditionElement = document.getElementById("condition");
    const weatherIconElement = document.getElementById("weather-icon");

    cityNameElement.textContent = data.location.name;
    temperatureElement.textContent = `${data.current.temp_c} °C`;
    conditionElement.textContent = data.current.condition.text;

    // Set weather icon
    const iconUrl = `https:${data.current.condition.icon}`;
    weatherIconElement.innerHTML = `<img src="${iconUrl}" alt="${data.current.condition.text}" />`;
  }

  /**
   * Display 5-day weather forecast on the page.
   * @param {Object} data - The forecast data to display.
   */
  function displayFiveDayForecast(data) {
    const forecastDetailsElement = document.getElementById("forecast-details");
    forecastDetailsElement.innerHTML = "";

    data.forecast.forecastday.forEach((day) => {
      const forecastDay = document.createElement("div");
      forecastDay.className = "forecast-day";
      forecastDay.innerHTML = `
        <h3>${new Date(day.date).toLocaleDateString()}</h3>
        <img src="https:${day.day.condition.icon}" alt="${
        day.day.condition.text
      }" />
        <p><strong>Temp: ${day.day.avgtemp_c} °C</strong></p>
        <p><strong>Condition:</strong> ${day.day.condition.text}</p>
      `;
      forecastDetailsElement.appendChild(forecastDay);
    });
  }

  /**
   * Display an error message.
   * @param {string} message - The error message to display.
   */
  function displayError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
  }

  /**
   * Clear the error message display.
   */
  function clearError() {
    errorMessage.textContent = "";
    errorMessage.style.display = "none";
  }

  /**
   * Show the loading indicator.
   */
  function showLoading() {
    loadingIndicator.style.display = "block";
  }

  /**
   * Hide the loading indicator.
   */
  function hideLoading() {
    loadingIndicator.style.display = "none";
  }

  unitRadios.forEach((radio) => {
    radio.addEventListener("change", (event) => {
      unit = event.target.value;
      const currentCity = cityInput.value.trim();
      if (currentCity) {
        fetchWeatherData(currentCity);
        fetchFiveDayForecast(currentCity);
      }
    });
  });
});
