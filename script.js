/**
 * Weather App
 ̶*̶ ̶T̶O̶D̶O̶:̶ ̶C̶o̶m̶p̶l̶e̶t̶e̶ ̶g̶e̶t̶W̶e̶a̶t̶h̶e̶r̶D̶a̶t̶a̶(̶)̶ ̶t̶o̶ ̶r̶e̶t̶u̶r̶n̶ ̶j̶s̶o̶n̶ ̶r̶e̶s̶p̶o̶n̶s̶e̶ ̶P̶r̶o̶m̶i̶s̶e̶
 ̶*̶ ̶T̶O̶D̶O̶:̶ ̶C̶o̶m̶p̶l̶e̶t̶e̶ ̶s̶e̶a̶r̶c̶h̶C̶i̶t̶y̶(̶)̶ ̶t̶o̶ ̶g̶e̶t̶ ̶u̶s̶e̶r̶ ̶i̶n̶p̶u̶t̶ ̶a̶n̶d̶ ̶g̶e̶t̶ ̶d̶a̶t̶a̶ ̶u̶s̶i̶n̶g̶ ̶g̶e̶t̶W̶e̶a̶t̶h̶e̶r̶D̶a̶t̶a̶(̶)̶
 ̶*̶ ̶T̶O̶D̶O̶:̶ ̶C̶o̶m̶p̶l̶e̶t̶e̶ ̶s̶h̶o̶w̶W̶e̶a̶t̶h̶e̶r̶D̶a̶t̶a̶(̶)̶ ̶t̶o̶ ̶s̶e̶t̶ ̶t̶h̶e̶ ̶d̶a̶t̶a̶ ̶i̶n̶ ̶t̶h̶e̶ ̶t̶h̶e̶ ̶h̶t̶m̶l̶ ̶f̶i̶l̶e̶ ̶f̶r̶o̶m̶ ̶r̶e̶s̶p̶o̶n̶s̶e̶
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this:
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key

  //CODE GOES HERE
  const fetchURL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weatherPromise = fetch(fetchURL);
  return weatherPromise.then((res) => {
    return res.json();
  });
};

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = () => {
  const city = document.getElementById("city-input").value;
  // CODE GOES HERE
  getWeatherData(city)
    .then((res) => {
      showWeatherData(res);
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
};

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
  //CODE GOES HERE

  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText =
    weatherData.weather[0].main;
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;
};
