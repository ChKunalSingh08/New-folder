const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');
const am_pm = document.querySelector('#am-pm');
const day = document.querySelector('#date');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const hiddenDate = document.querySelector('#hidden-date');
const hiddenTime = document.querySelector('#hidden-time');

let getAmPm = ((hour) => hour < 12 ? "AM" : "PM");
let getHour = ((hour) => {
    if (hour === 0) return 12;
    return hour > 12 ? hour - 12 : hour;
})

function timeNow() {
    const now = new Date();
    hour.textContent = String(getHour(now.getHours())).padStart(2, "0");
    minute.textContent = String(now.getMinutes()).padStart(2, "0");
    second.textContent = String(now.getSeconds()).padStart(2, "0");
    am_pm.textContent = String(getAmPm(now.getHours()));
    day.textContent = String(now.getDate()).padStart(2, "0");
    month.textContent = String(now.getMonth() + 1).padStart(2, "0");
    year.textContent = String(now.getFullYear()).padStart(2, "0");

    hiddenDate.textContent = `today is ${String(now.getDate()).padStart(2, "0")} ${String(now.getMonth() + 1).padStart(2, "0")} ${String(now.getFullYear()).padStart(2, "0")}`;

    hiddenTime.textContent = `current time is ${String(getHour(now.getHours())).padStart(2, "0")} ${String(now.getMinutes()).padStart(2, "0")} ${String(getAmPm(now.getHours()))}`;
}
timeNow()
setInterval( timeNow, 1000)