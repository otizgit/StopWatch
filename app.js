const stateBtn = document.querySelector(".stateBtn");
const resetBtn = document.querySelector(".resetBtn");

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

function stopWatch() {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  if (seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }

  if (minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }

  if (hours < 10) {
    leadingHours = "0" + hours.toString();
  } else {
    leadingHours = hours;
  }

  document.querySelector(".timer").innerText =
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

let timerInterval;
let timerStatus = true;

stateBtn.addEventListener("click", function () {
  if (timerStatus) {
    timerInterval = window.setInterval(stopWatch, 1000);
    stateBtn.innerHTML = '<i class="fa-solid fa-pause" id="pause"></i>';
  } else {
    window.clearInterval(timerInterval);
    stateBtn.innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
  }
  timerStatus = !timerStatus;
});

resetBtn.addEventListener("click", function () {
  document.querySelector(".timer").innerText = "00:00:00";
  window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  stateBtn.innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
  timerStatus = !timerStatus;
});
