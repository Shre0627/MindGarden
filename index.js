let timerInterval;
let remainingTime = 0;

function updateDisplay(minutes, seconds) {
    document.getElementById("time").textContent =
        String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
}

function startTimer() {
    if (remainingTime <= 0) {
        alert("Please set a duration first!");
        return;
    }

    if (timerInterval) clearInterval(timerInterval); // Prevent multiple intervals

    timerInterval = setInterval(function () {
        let minutes = Math.floor(remainingTime / 60);
        let seconds = remainingTime % 60;

        updateDisplay(minutes, seconds);

        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
        } else {
            remainingTime--;
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    remainingTime = 0;
    updateDisplay(0, 0);
}

document.getElementById("setDuration").addEventListener("click", function () {
    let inputMinutes = parseInt(document.getElementById("duration").value);
    if (isNaN(inputMinutes) || inputMinutes <= 0) {
        alert("Please enter a valid duration in minutes.");
        return;
    }
    remainingTime = inputMinutes * 60;
    updateDisplay(inputMinutes, 0);
});

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
