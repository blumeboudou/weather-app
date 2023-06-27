let now = new Date();
let show = document.querySelector("#current-date");
let time = document.querySelector("#current-time");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

if (minutes < 10) {
  minutes = "0" + minutes;
}
show.innerHTML = `${day}, ${date} ${month} ${year}`;
time.innerHTML = `${hours}:${minutes}`;

function searching(event) {
  event.preventDefault();
  let search = document.querySelector("#search-city");
  let h1 = document.querySelector("h1");
  if (search.value) {
    h1.innerHTML = `${search.value}`;
    let units = "metric";
    let apiKey = "8e4ff3a5c367e5dcc1470b8d0e6da93e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
  }
}

let result = document.querySelector("#city-form");
result.addEventListener("submit", searching);
let button = document.querySelector("#search-result");
button.addEventListener("click", searching);

function showTemperature(response) {
  let city = response.data.name;
  let h1 = document.querySelector("h1");
  h1.innerHTML = city;

  let temperature = Math.round(response.data.main.temp);
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${temperature}°`;

  let maxTemperature = Math.round(response.data.main.temp_max);
  let maxtemp = document.querySelector("#maxtemp");
  maxtemp.innerHTML = `H:${maxTemperature}°`;

  let minTemperature = Math.round(response.data.main.temp_min);
  let mintemp = document.querySelector("#mintemp");
  mintemp.innerHTML = `L:${minTemperature}° `;
}
