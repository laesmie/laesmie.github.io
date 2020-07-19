// Cozumel ID: 3530103
// API Key: 1d914c5eb40cb68b0bffaee012b729b0

const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=3530103&appid=1d914c5eb40cb68b0bffaee012b729b0&units=imperial"

fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
    
    // weather summary
    document.getElementById('currentTemp').innerHTML = weatherInfo.list[0].main.temp;
    document.getElementById('description').innerHTML = weatherInfo.list[0].weather[0].description;
    document.getElementById('humidity').innerHTML = weatherInfo.list[0].main.humidity;    
    
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