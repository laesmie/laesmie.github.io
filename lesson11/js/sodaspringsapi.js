// Soda Spring City ID: 5607916
// API Key: 3e14468cd1a62388166001da6f7daa51

const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5607916&appid=3e14468cd1a62388166001da6f7daa51&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((ws) => {
    console.log(ws);

    let summary = document.createElement('article');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let p5 = document.createElement('p');

    p1.innerHTML = `<strong>Current:</strong>  ${ws.main.temp} &deg;F`;
    p2.innerHTML = `<strong>Today's High:</strong>  ${ws.main.temp_max} &degF`;
    p3.innerHTML = `<strong>Humidity:</strong>  ${ws.main.humidity} %`;
    p4.innerHTML = `<strong>Wind Speed:</strong>  ${ws.wind.speed} mph`;
    p5.innerHTML = `<strong>Wind Chill:</strong>  ${ws.wind.humidity} &degF`;

    summary.appendChild(p1);
    summary.appendChild(p2);
    summary.appendChild(p3);
    summary.appendChild(p4);
    summary.appendChild(p5);

    document.getElementById('jsonsum').appendChild(summary);
   
  });