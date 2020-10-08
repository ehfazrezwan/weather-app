/**
 * Weather App
 ̶*̶ ̶T̶O̶D̶O̶:̶ ̶C̶o̶m̶p̶l̶e̶t̶e̶ ̶g̶e̶t̶W̶e̶a̶t̶h̶e̶r̶D̶a̶t̶a̶(̶)̶ ̶t̶o̶ ̶r̶e̶t̶u̶r̶n̶ ̶j̶s̶o̶n̶ ̶r̶e̶s̶p̶o̶n̶s̶e̶ ̶P̶r̶o̶m̶i̶s̶e̶
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
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
  let weatherData = getWeatherData(city)
    .then((res) => {
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
};
