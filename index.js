//CLOCK
let timerInterval;
let remainingTime = 0;

function updateDisplay(minutes, seconds) {
    document.getElementById("time").textContent =
        String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
}

function startTimer() {
    if (remainingTime <= 0 || isNaN(remainingTime)) {
        alert("Please set a duration first!");
        return;
    }

    if (timerInterval) clearInterval(timerInterval); // Prevent multiple intervals

    timerInterval = setInterval(function () {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;

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
    const inputMinutes = parseInt(document.getElementById("duration").value);
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

//TIMER-FLOWER SPAWN
const flower = document.getElementById("flower");
function showFlower() {
    flower.style.display = "block";
}

function hideFlower() {
    flower.style.display = "none";
}

//hideFlower(); // Ensure the flower is hidden initially

function startTimer() {
    if (remainingTime <= 0 || isNaN(remainingTime)) {
        alert("Please set a duration first!");
        return;
    }

    if (timerInterval) clearInterval(timerInterval); // Prevent multiple intervals

    timerInterval = setInterval(function () {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;

        updateDisplay(minutes, seconds);

        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            showFlower();
        } else {
            remainingTime--;
        }
    }, 1000);
}

//NAVIGATION BAR
function openMenu() {
    const navBar = document.getElementById("navBar");
    if(navBar.style.display === "none" || navBar.style.display === "") {
        navBar.style.display = "block";
    } else {
        navBar.style.display = "none";
    }
}

const button = document.getElementById('addtask');
if (button) {
    button.addEventListener('click', addTask);
}

const taskInput = document.getElementById('task');
if (taskInput){
    taskInput.addEventListener('keypress', function(e){
        if (e.key === 'Enter') {
            addTask();
        }
    });
}

function addTask() {
    console.log('addTask trigger');
    let taskInput = document.getElementById('task');
    let taskValue = taskInput.value.trim();

    if (taskValue === '') {
        alert('Task cannot be empty');
        return;
    }

    let taskList = document.getElementById('taskList');
    let listItem = document.createElement('li');

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', function () {
        listItem.classList.toggle('completed', checkbox.checked);
    });

    var taskText = document.createElement('span');
    taskText.textContent = taskValue;

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value = '';
}

