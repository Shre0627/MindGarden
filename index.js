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

