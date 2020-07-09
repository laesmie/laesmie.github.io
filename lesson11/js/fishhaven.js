// Fish Haven Zip Code: 83287,us
// API Key: 3e14468cd1a62388166001da6f7daa51

const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5607916&appid=3e14468cd1a62388166001da6f7daa51&units=imperial"

fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
    
    // weather summary
    document.getElementById('description').innerHTML = weatherInfo.list[0].weather[0].description;
    document.getElementById('currentTemp').innerHTML = weatherInfo.list[0].main.temp;
    document.getElementById('humidity').innerHTML = weatherInfo.list[0].main.humidity;
    document.getElementById('windSpeed').innerHTML = weatherInfo.list[0].wind.speed;
    
    // wind chill
    const tempNumber = parseFloat(document.getElementById("currentTemp").textContent);
    const speedNumber = parseFloat(document.getElementById("windSpeed").textContent);
    
    let windChill = 35.74 + (.06215 * tempNumber) - (35.75 * Math.pow(speedNumber, 0.16)) + 
        (0.4275 * tempNumber * Math.pow(speedNumber, 0.16));
    windChill = Math.round(windChill);
    
    if (tempNumber <= 50 && speedNumber > 3) {
        document.getElementById("chill").textContent = windChill + "\xb0 F";
    } else {
        document.getElementById("chill").textContent = "N/A";
    }
    
    
    // find today
    const t = new Date();
    const todayDayNumber = t.getDay();
    let forecastDayNumber = todayDayNumber;
    
    const weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
    
    
    // five-day forecast
    let mylist = weatherInfo.list;
    
    for( i = 0; i < mylist.length; i++) {
        var time = mylist[i].dt_txt;
        if(time.includes('18:00:00')) {
            
            forecastDayNumber += 1;
            if (forecastDayNumber === 7) {
                forecastDayNumber = 0;
            }
            
            let theDayName = document.createElement("span");
            theDayName.textContent = weekday[forecastDayNumber];
            
            let iconcode = weatherInfo.list[i].weather[0].icon;
            let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
            let iconAlt = weatherInfo.list[i].weather[0].description;
            let theIcon = document.createElement("img");
            theIcon.src = iconPath;
            theIcon.alt = iconAlt;
            
            let theTemp = document.createElement("p");
            theTemp.textContent = weatherInfo.list[i].main.temp + "\xb0";
            
            let theDay = document.createElement("div");
            theDay.appendChild(theDayName);
            theDay.appendChild(theIcon);
            theDay.appendChild(theTemp);
            
        document.getElementById('weatherforecast').appendChild(theDay);
            
        } // end if
    }// end for
}); // end of "then" fat arrow function


// events for towns
const requestURL = 'http"//byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
})
    .then(function (jsonObject) {
    
        const towns = jsonObject['towns'];
        const home = towns.filter(town => (town.name == 'Fish Haven'));
    
        home.forEach(town => {
            let ourEvents = document.createElement('article');
            let eventList = document.createElement('ul');
            
            const townEvents = town.events;
            for (let x = 0; x < townEvents.length; x++) {
                const listItem = document.createElement('li');
                listItem.textContent = townEvents[x];
                eventList.appendChild(listItem);
            }
            
            document.getElementById('ourEvents').appendChild(eventList);
        })
});