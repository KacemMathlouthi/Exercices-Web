const taskInput = document.getElementById('task');
const contentInput = document.getElementById('content');
const tasksList = document.getElementById('tasks');
const addButton = document.getElementById('addButton');

// Function to add a new task
function addTask() {
    // Get the values of the input fields
    const taskName = taskInput.value.trim();
    const taskContent = contentInput.value.trim();

    if (taskName !== '' && taskContent !== '') {
        // Create a new list item
        const listItem = document.createElement('li');

        // Create a text node containing the task name and content
        const taskText = document.createTextNode(taskName + ': ' + taskContent);

        // Append the text node to the list item
        listItem.appendChild(taskText);

        // Append the new list item to the task list
        tasksList.appendChild(listItem);

        // Clear the input fields
        taskInput.value = '';
        contentInput.value = '';

        // Show the task list
        tasksList.style.display = 'block';
    }
}

// Event listener to add task when "Add Task" button is clicked
addButton.addEventListener('click', addTask);

// Event listener to check if both input fields have values and enable/disable the button accordingly
function checkInputs() {
    const taskName = taskInput.value.trim();
    const taskContent = contentInput.value.trim();

    if (taskName !== '' && taskContent !== '') {
        addButton.disabled = false;
    } else {
        addButton.disabled = true;
    }
}

// Event listeners to check inputs when input fields are changed
taskInput.addEventListener('input', checkInputs);
contentInput.addEventListener('input', checkInputs);
