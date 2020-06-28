const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=6110433cbf064f127daa331bff860afc&units=imperial"

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {

    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML = weatherInfo.name;
    document.getElementById('current').innerHTML = weatherInfo.weather[0].description;
    document.getElementById('high').innerHTML = weatherInfo.main.temp_max;
    document.getElementById('humidity').innerHTML = weatherInfo.main.humidity;
    document.getElementById('windSpeed').innerHTML = weatherInfo.wind.speed;
    
    const iconcode = weatherInfo.weather[0].icon;
    console.log(iconcode);
    
    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    console.log(icon_path);
    
    document.getElementById('weather_icon').src = icon_path;

 });