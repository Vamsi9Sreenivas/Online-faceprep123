document.getElementById('addBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        const taskList = document.getElementById('taskList');
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <input type="checkbox" class="completeCheck">
        `;
        
        taskList.appendChild(taskItem);
        taskInput.value = "";
        
        taskItem.querySelector('.completeCheck').addEventListener('change', function() {
            if (this.checked) {
                taskItem.classList.add('completed');
                taskList.appendChild(taskItem);
            } else {
                taskItem.classList.remove('completed');
                taskList.insertBefore(taskItem, taskList.querySelector('.completed') || null);
            }
        });
    }
}
