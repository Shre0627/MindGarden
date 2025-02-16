//CLOCK
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


//NAVIGATION BAR
function openMenu() {
    var navBar = document.getElementById("navBar");
    if(navBar.style.display === "none" || navBar.style.display === "") {
        navBar.style.display = "block";
    } else {
        navBar.style.display = "none";
    }
}

let button = document.getElementById('addtask');
if (button) {
    button.addEventListener('click', addTask);
}

let taskInput = document.getElementById('task');
if (taskInput){
    taskInput.addEventListener('keypress', function(e){
        if (e.key === 'Enter') {
            addTask();
        }
    });
}

function addTask() {
    console.log('addTask trigger');
    let task = document.getElementById('task');
    console.log(task.value);

    let taskVal = task.value;
    if (taskVal === '') {
        alert('Task cannot be empty');
        return;
    }

    let newTask = document.createElement('li');
    newTask.appendChild(document.createTextNode(taskVal));

    let taskList = document.getElementById('taskList');
    console.log(newTask);
    taskList.appendChild(newTask);
    task.value = '';
}

