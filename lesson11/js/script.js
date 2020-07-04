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





/* rating */
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}