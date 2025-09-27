let btn = document.querySelector("button");
btn.addEventListener("click", (event) => {
  event.preventDefault();
  let city = document.querySelector("form input");
  let cityVal = city.value;
  updateDetails(cityVal);
});

let updateDetails = async (_city) => {
  let detailsObj = await getDetails(_city);
  let temp = document.querySelector("#temp");
  temp.innerHTML = `<p id="temp">${Math.floor(
    detailsObj.temperature
  )}<sup>0</sup>c</p>`;
  let city = document.querySelector("#city");
  city.innerText = detailsObj.cityName;
  let humidity = document.querySelector("#h-percentage");
  humidity.innerText = `${detailsObj.humidity}%`;
  let windSpeed = document.querySelector("#w-speed");
  windSpeed.innerText = `${detailsObj.windSpeed}km/h`;
  let img = document.querySelector("#w-img");
  if (detailsObj.weather.toLowerCase() === "clear") {
    img.src = "images/clear.png";
  } else if (detailsObj.weather.toLowerCase() === "clouds") {
    img.src = "images/clouds.png";
  } else if (detailsObj.weather.toLowerCase() === "rain") {
    img.src = "images/rain.png";
  } else if (detailsObj.weather.toLowerCase() === "drizzle") {
    img.src = "images/drizzle.png";
  } else if (detailsObj.weather.toLowerCase() === "mist") {
    img.src = "images/mist.png";
  } else if (detailsObj.weather.toLowerCase() === "snow") {
    img.src = "images/snow.png";
  }
};

let getDetails = async (_city) => {
  let city = _city.toLowerCase();
  let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9d9b5359004cf5294c673f3b9b7af533&units=metric`;
  let stat = await fetch(URL);
  if (!stat.ok) {
    let display = document.querySelector(".hidden");
    display.style.display = "none";
    let err = document.querySelector("#error");
    err.style.display = "block";

    return;
  } else {
    let display = document.querySelector(".hidden");
    display.style.display = "block";
    let err = document.querySelector("#error");
    err.style.display = "none";
  }
  let details = await stat.json();
  let temperature = details.main.temp;
  let cityName = details.name;
  let humidity = details.main.humidity;
  let weather = details.weather[0].main;
  let windSpeed = details.wind.speed;
  return { weather, temperature, cityName, humidity, windSpeed, stat };
};
