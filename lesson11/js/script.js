/* menu */
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}


/* current date in footer */
var today = new Date();
var weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

var date = today.getDate();
var month = [
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
    "December"
]

var year = today.getFullYear();

document.getElementById('currentDate').innerHTML = weekday[today.getDay()] + ", " + date + " " + month[today.getMonth()] + " " + year ;


/* banner message */
const day = new Date();
console.log(day);

const dayNumber = day.getDay();
console.log(dayNumber);

const element = document.getElementById("banner");

if (dayNumber == 5) {
    element.classList.add("showme");
}
else {
    element.classList.add("hideme");
}


//lazy loading
const imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = function(image) {
	image.setAttribute('src', image.getAttribute('data-src'));
	image.onload = function() {
		image.removeAttribute('data-src');
	};
};

if('IntersectionObserver' in window) {
	var observer = new IntersectionObserver(function(items, observer) {
		items.forEach(function(item) {
			if(item.isIntersecting) {
				loadImages(item.target);
				observer.unobserve(item.target);
			}
		});
	});
	imagesToLoad.forEach(function(img) {
		observer.observe(img);
	});
}
else {
	imagesToLoad.forEach(function(img) {
		loadImages(img);
	});
}


/* json */
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);  temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        const home = towns.filter(town => (town.name == 'Fish Haven' || town.name == 'Preston' || town.name == 'Soda Springs'));

        home.forEach(town => {
            let card = document.createElement('article');
            let h3 = document.createElement('h3');
            let h4 = document.createElement('h4');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let image = document.createElement('img');

            h3.innerHTML = town.name;
            h4.innerHTML = `<em>"${town.motto}"</em>`;
            p1.innerHTML = `Year Founded:  ${town.yearFounded}`;
            p2.innerHTML = `Population:  ${town.currentPopulation}`;
            p3.innerHTML = `Annual Rain Fall:  ${town.averageRainfall}`;

            image.setAttribute('src', 'images/' + town.photo);
            image.setAttribute('alt', town.photo);

            card.appendChild(h3);
            card.appendChild(h4);
            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(p3);
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);            
        })
    });


/* rating */
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}