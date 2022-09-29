document
  .getElementById("searchButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var userInput = document.getElementById("cityChoice").value;
    console.log(userInput);
  });
