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
      var currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=2262de9dcc14db387277b844f35e6190&units=imperial`;

      fetch(currentWeatherUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (currentWeather) {
          var cityName = document.getElementById("cityName");
          var cityP = document.createElement("p");
          cityP.innerText = "City : " + currentWeather.name;
          cityName.appendChild(cityP);

          // current date
          var date = document.getElementById("currentDate");
          var cityDate = document.createElement("p");
          cityDate.innerText =
            "Date : " + moment.unix(currentWeather.dt).format("MMMM Do YYYY");
          date.appendChild(cityDate);

          // display current weather
          var cityIcon = document.getElementById("weatherIcon");
          var icon = document.createElement("img");
          icon.src = `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`;
          cityIcon.appendChild(icon);

          //  display current temperature
          var cityTemp = document.getElementById("currentTemperature");
          var temp = document.createElement("p");
          temp.innerText = "Temperature : " + currentWeather.main.temp;
          cityTemp.appendChild(temp);

          // display current windspeed
          var cityWind = document.getElementById("currentWindSpeed");
          var wind = document.createElement("p");
          wind.innerText = "Wind Speed : " + currentWeather.wind.speed;
          cityWind.appendChild(wind);

          // display current humudity
          var cityHumid = document.getElementById("currentHumidity");
          var humid = document.createElement("p");
          humid.innerText = "Humidity : " + currentWeather.main.humidity;
          cityHumid.appendChild(humid);

          console.log(currentWeather);

          var fiveDayUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&appid=2262de9dcc14db387277b844f35e6190`;

          fetch(fiveDayUrl)
            .then(function (response) {
              return response.json();
            })
            .then(function (fiveDayWeather) {
              // display five day weather here
            });
        });
    });
}
