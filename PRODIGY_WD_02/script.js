let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

const display = document.getElementById("display");
const lapList = document.getElementById("lapList");


// START STOPWATCH

function startStopwatch(){

  if(timer !== null){
    return;
  }

  timer = setInterval(updateTime,1000);

}


// UPDATE TIME

function updateTime(){

  seconds++;

  if(seconds == 60){
    seconds = 0;
    minutes++;
  }

  if(minutes == 60){
    minutes = 0;
    hours++;
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  display.innerHTML = `${h}:${m}:${s}`;

}


// PAUSE STOPWATCH

function pauseStopwatch(){

  clearInterval(timer);

  timer = null;

}


// RESET STOPWATCH

function resetStopwatch(){

  clearInterval(timer);

  timer = null;

  seconds = 0;
  minutes = 0;
  hours = 0;

  display.innerHTML = "00:00:00";

  lapList.innerHTML = "";

}


// RECORD LAP

function recordLap(){

  if(display.innerHTML === "00:00:00"){
    return;
  }

  let lapItem = document.createElement("li");

  lapItem.innerHTML = `Lap ${lapList.children.length + 1} : ${display.innerHTML}`;

  lapList.appendChild(lapItem);

}