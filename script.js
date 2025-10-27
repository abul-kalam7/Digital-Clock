const timeNow = document.querySelector(".timeNow")
const dateNow = document.querySelector(".dateNow")
const fotns = document.querySelector(".fonts")


fotns.addEventListener("click", () => {

    if (fotns.value === "sans-serif") {
        timeNow.style.fontFamily = "sans-serif";
    } else if (fotns.value === "Cabin Sketch") {
        timeNow.style.fontFamily = "Cabin Sketch"
    } else if (fotns.value === "Bungee Outline") {
        timeNow.style.fontFamily = "Bungee Outline"
    } else {
        timeNow.style.fontFamily = "BBH Sans Bogle"
    }

})


const date = new Date();
let nowDay = date.getDay();
let nowDate = date.getDate();
let nowMonth = date.getMonth() + 1;
let nowYear = date.getFullYear();

let nowHour = date.getHours();
let nowMinute = date.getMinutes();
let nowSecond = date.getSeconds();

let nowSecondUpdate = setInterval(() => {
    if (nowSecond < 59) {
        nowSecond++;
    } else {
        nowSecond = 0;
        if (nowSecond === 0) {
            if (nowMinute < 59) {
                nowMinute++;
            } else {
                nowMinute = 0;
                if (nowMinute === 0) {
                    if (nowHour < 23) {
                        nowHour++;
                    } else {
                        nowHour = 0;
                    }
                }
            }
        }
    }

    let ampm = nowHour >= 12 ? " pm" : " am"
    let displayHour = nowHour % 12;
    if (displayHour === 0) {
        displayHour = 12;
    }

    const formattedTime = `${displayHour.toString().padStart(2, '0')}:` +
        `${nowMinute.toString().padStart(2, '0')}:` +
        `${nowSecond.toString().padStart(2, '0')}` + `${ampm}`
    timeNow.innerHTML = ` ${formattedTime}`;
}, 1000);

/*
let ampm = nowHour >= 12 ? 'PM' : 'AM';
let displayHour = nowHour % 12;
if (displayHour === 0) displayHour = 12;

const formattedTime = `${displayHour.toString().padStart(2, '0')}:`+
`${nowMinute.toString().padStart(2, '0')}:`+
`${nowSecond.toString().padStart(2, '0')} ${ampm}`;
timeNow.innerHTML = ` ${formattedTime}`;

*/

function monthName() {
    if (nowMonth == 1) {
        nowMonth = "January";
    } else if (nowMonth == 2) {
        nowMonth = "February";
    } else if (nowMonth == 3) {
        nowMonth = "March";
    } else if (nowMonth == 4) {
        nowMonth = "April";
    } else if (nowMonth == 5) {
        nowMonth = "May";
    } else if (nowMonth == 6) {
        nowMonth = "June";
    } else if (nowMonth == 7) {
        nowMonth = "July";
    } else if (nowMonth == 8) {
        nowMonth = "August";
    } else if (nowMonth == 9) {
        nowMonth = "September";
    } else if (nowMonth == 10) {
        nowMonth = "October";
    } else if (nowMonth == 11) {
        nowMonth = "November";
    } else {
        nowMonth = "December";
    }
    return nowMonth;
}


function dayName() {
    if (nowDay == 0) {
        nowDay = "Sunday"
    } else if (nowDay == 1) {
        nowDay = "Monday"
    } else if (nowDay == 2) {
        nowDay = "Tuesday"
    } else if (nowDay == 3) {
        nowDay = "Wetnesday"
    } else if (nowDate == 4) {
        nowDay = "Thesday"
    } else if (nowDay == 5) {
        nowDay = "Friday"
    } else {
        nowDay = "Setarday"
    }
    return nowDay;
}

dateNow.innerHTML = ` ${dayName()}, ${nowDate} ${monthName()} ${nowYear}`;

