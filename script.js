const tasks = document.querySelectorAll('.task');
const columns = document.querySelectorAll('.column');

tasks.forEach(task => {
  task.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', task.innerText);
    task.classList.add('dragging');
  });

  task.addEventListener('dragend', () => {
    task.classList.remove('dragging');
  });
});

columns.forEach(column => {
  column.addEventListener('dragover', e => {
    e.preventDefault();
  });

  column.addEventListener('drop', e => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    const newTask = document.createElement('div');
    newTask.className = 'task';
    newTask.draggable = true;
    newTask.innerText = data;
    column.appendChild(newTask);
    initDragEvents(newTask);
  });
});

function initDragEvents(task) {
  task.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', task.innerText);
    task.classList.add('dragging');
  });

  task.addEventListener('dragend', () => {
    task.classList.remove('dragging');
  });
}
