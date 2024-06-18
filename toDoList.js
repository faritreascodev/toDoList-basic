document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('tarea');
    const addTaskButton = document.getElementById('añadir');
    const taskList = document.getElementById('tareas');

    // Función para agregar una nueva tarea
    function addTask(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const li = document.createElement('li');
            li.className = 'task-item';

            const span = document.createElement('span');
            span.textContent = taskText;

            const completeButton = document.createElement('button');
            completeButton.textContent = '✔';
            completeButton.addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = '✖';
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(li);
            });

            li.appendChild(span);
            li.appendChild(completeButton);
            li.appendChild(deleteButton);
            taskList.appendChild(li);

            taskInput.value = '';
            taskInput.focus();
        }
    }

    // Se añade la tarea al hacer clic en el input-submit
    addTaskButton.addEventListener('click', addTask);

    // Otra forma de añadir la tarea --> dando enter
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask(e);
        }
    });
});
