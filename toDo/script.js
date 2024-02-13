const taskInput = document.getElementById('task');
const contentInput = document.getElementById('content');
const tasksList = document.getElementById('tasks');
const addButton = document.getElementById('addButton');

function addTask() {
    const taskName = taskInput.value.trim();
    const taskContent = contentInput.value.trim();

    if (taskName !== '' && taskContent !== '') {
        const listItem = document.createElement('li');

        const removeSpan = document.createElement('span');
        removeSpan.classList.add('remove-task');
        removeSpan.innerHTML = '<img src="trash.png" alt="Trash Icon" height="16" width="16">';
        removeSpan.addEventListener('click', function() {
            listItem.remove();
        });
        const task = document.createTextNode(taskName + ': ' + taskContent);

        listItem.appendChild(task);

        listItem.appendChild(removeSpan);

        tasksList.appendChild(listItem);

        taskInput.value = '';
        contentInput.value = '';

        tasksList.style.display = 'block';
    }
}

addButton.addEventListener('click', addTask);

function checkInputs() {
    const taskName = taskInput.value.trim();
    const taskContent = contentInput.value.trim();

    if (taskName !== '' && taskContent !== '') {
        addButton.disabled = false;
    } else {
        addButton.disabled = true;
    }
}

taskInput.addEventListener('input', checkInputs);
contentInput.addEventListener('input', checkInputs);
