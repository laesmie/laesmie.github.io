function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

// The footer must display the current date using JavaScript 
// in this format Wednesday, 24 July 2020

const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
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
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = dayName + ", " + d.getDate() + " " + monthName + " " + year;
document.getElementById("currentDate").textContent = fulldate;