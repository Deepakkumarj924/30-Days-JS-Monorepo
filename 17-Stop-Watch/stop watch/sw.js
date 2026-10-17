const stopBtn = document.getElementById("stop");
const playBtn = document.getElementById("play");
const resetBtn = document.getElementById("reset");
let hourEle = document.getElementById("hour");
let minuteEle = document.getElementById("minute");
let secondEle = document.getElementById("second");
let second = 0;
let minute = 0;
let hour = 0;
let timer = null;
function stopWatch() {
  second++;
  if (second == 60) {
    second = 0;
    minute++;
    if (minute == 60) {
      minute = 0;
      hour++;
    }
  }
  if (hour < 10) {
    hourEle.innerHTML = "0" + hour;
  } else {
    hourEle.innerHTML = hour;
  }
  if (minute < 10) {
    minuteEle.innerHTML = "0" + minute;
  } else {
    minuteEle.innerHTML = minute;
  }
  if (second < 10) {
    secondEle.innerHTML = "0" + second;
  } else {
    secondEle.innerHTML = second;
  }
}
function watchStart() {
  if (timer != null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
}
playBtn.addEventListener("click", () => {
  watchStart();
});
stopBtn.addEventListener("click", () => {
  clearInterval(timer);
});
resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  hour = 0;
  minute = 0;
  second = 0;

  hourEle.innerHTML = "0" + hour;
  minuteEle.innerHTML = "0" + minute;
  secondEle.innerHTML = "0" + second;
  console.log("hello");
});
