// menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}


// current date in footer
const days = [
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
const dayName = days[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = dayName + ", " + d.getDate() + " " + monthName + " " + year;
document.getElementById("currentDate").textContent = fulldate;


// webfonts
WebFont.load({
    google: {
        familes: [
            'Amatic SC', 'Montserrat'
        ]
    }
});