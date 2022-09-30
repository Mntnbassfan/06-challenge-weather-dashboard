document
  .getElementById("searchButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var userInput = document.getElementById("cityChoice").value;
    console.log(userInput);
    getApi(userInput);
  });

//  get API data
function getApi(cityChoice) {
  var requestUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityChoice}&appid=2262de9dcc14db387277b844f35e6190`;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //Using console.log to examine the data
      console.log(data);
      var currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=2262de9dcc14db387277b844f35e6190`;

      fetch(currentWeatherUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (currentWeather) {
          // display current weather here
          console.log(currentWeather);

          var fiveDayUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&appid=2262de9dcc14db387277b844f35e6190`;

          fetch(fiveDayUrl)
            .then(function (response) {
              return response.json();
            })
            .then(function (fiveDayWeather) {
              // display five day weather here
              console.log(fiveDayWeather);
            });
        });

      // create cards do display data

      // card for city name
      document.getElementById("cityName").innerHTML = `
      <div class="card" style="width:100%";>
      <div class="container">
    <h4><b>City Name : </b></h4>
    </div>
    `;

      // card for current date
      // card for weather icon
      // card for current temperature
      // card for current wind speed
      // card for current humidity
    });
}
