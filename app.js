const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const newYear = "1 April 2021";

function countdown() {
  const newYearsDate = new Date(newYear);
  const currentDate = new Date();

  const countdowntTo = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(countdowntTo / 3600 / 24);
  const hours = Math.floor(countdowntTo / 3600) % 24;
  const minutes = Math.floor(countdowntTo / 60) % 60;
  const seconds = Math.floor(countdowntTo) % 60;

  daysEl.innerHTML = formatTime(days);
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
