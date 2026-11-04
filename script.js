window.onload = function () {
var seconds = 0;
var milliseconds = 0;

var appendmilliseconds = document.getElemenyById("millisecond");
var appendseconds = document.getElemenyById("seconds");

var buttonstart = document.getElemenyById("button-start");
var buttonstop = document.getElemenyById("button-stop");
var buttonreset = document.getElemenyById("button-reset");

var interval;

buttonstart.onclick = function () {
clearInterval(interval);
interval = setInterval(startTimer, 10)
};

buttonstop.onclick = function () {
clearInterval(interval);
};

buttonreset.onclick = function () {
clearInterval(interval);

milliseconds = 0;
seconds = 0;

appendmilliseconds.innerHTML = "00";
appendseconds.innerHTML ="00"
};

function startTimer() {
milliseconds++;

if (milliseconds <= 9) {
appendmilliseconds.innerHTML = "0" + milliseconds;
} else {
appendmilliseconds.innerHTML = + milliseconds;
}

if (milliseconds <= 99) {
    seconds++;

appendmilliseconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;

milliseconds = 0;
appendmilliseconds.innerHTML = "00";
}
}
}
