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

