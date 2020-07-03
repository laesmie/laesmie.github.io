// Preston City ID: 5604473
// API Key: 3e14468cd1a62388166001da6f7daa51

const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=3e14468cd1a62388166001da6f7daa51&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let summary = document.createElement('article');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let p5 = document.createElement('p');

    p1.innerHTML = `<strong>Current:</strong>  ${jsObject.main.temp} &deg;F`;
    p2.innerHTML = `<strong>High:</strong>  ${jsObject.main.temp_max} &degF`;
    p3.innerHTML = `<strong>Humidity:</strong>  ${jsObject.main.humidity} %`;
    p4.innerHTML = `<strong>Wind Speed:</strong>  ${jsObject.wind.speed} mph`;
    p5.innerHTML = `<strong>Wind Chill:</strong>  ${jsObject.wind.humidity} &degF`;

    summary.appendChild(p1);
    summary.appendChild(p2);
    summary.appendChild(p3);
    summary.appendChild(p4);
    summary.appendChild(p5);

    document.getElementById('jsonsum').appendChild(summary);
   
  });


/* wind chill */
const tempNumber = parseFloat(document.getElementById("temp").textContent);

const speedNumber = parseFloat(document.getElementById("speed").textContent);

let wc = 35.74 + (0.6215 * tempNumber) - (37.75 * Math.pow(speedNumber, 0.16)) + (0.4275 * tempNumber * Math.pow(speedNumber, 0.16));

wc = Math.round(wc);

if(tempNumber < =  50 && speedNumber > 3) {
    
    document.getElementById("chill").textContent = "Wind Chill is " +wc+ "\xB0F"; 
    
    } else {
        
        document.getElementById("chill").textContent = "No Wind Chill today"
    }