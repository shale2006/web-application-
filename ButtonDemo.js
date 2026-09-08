let container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

let heading = document.createElement("h1");
heading.textContent = "Days and Months";
container.appendChild(heading);

let dayHeading = document.createElement("h2");
dayHeading.textContent = "Day of the Week";
container.appendChild(dayHeading);

let dayText = document.createElement("p");
dayText.className = "display";
dayText.textContent = "Monday";
container.appendChild(dayText);

let dayButton = document.createElement("button");
dayButton.textContent = "Change day";
container.appendChild(dayButton);

let line = document.createElement("hr");
container.appendChild(line);

let monthHeading = document.createElement("h2");
monthHeading.textContent = "Month";
container.appendChild(monthHeading);

let monthText = document.createElement("p");
monthText.className = "display";
monthText.textContent = "January";
container.appendChild(monthText);

let monthButton = document.createElement("button");
monthButton.textContent = "Change month";
container.appendChild(monthButton);

let days_of_week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

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
    "December"
];

let day_index = 0;
let month_index = 0;

function changeDay() {

    day_index++;

    if (day_index >= days_of_week.length) {
        day_index = 0;
    }

    dayText.textContent = days_of_week[day_index];
}

function changeMonth() {

    month_index++;

    if (month_index >= months.length) {
        month_index = 0;
    }

    monthText.textContent = months[month_index];
}

dayButton.addEventListener("click", changeDay);

monthButton.addEventListener("click", changeMonth);
