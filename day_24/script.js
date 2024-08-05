document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "73d99aea1fcc471daad50158240508";
  const city = "Delhi";
  const weatherApiURL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  //   console.log(weatherApiURL);

  async function fetchWeatherData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching weather data: ", error);
    }
  }

  fetchWeatherData(weatherApiURL);
});
