import createTodo from './createTodo.js';

export default function editTodo(taskListGet, todosList) {
  for (let i = 0; i < taskListGet.length; i += 1) {
    taskListGet[i].addEventListener('click', (e) => {
      const firefox = e.path || (e.composedPath && e.composedPath());
      e.target.style.display = 'none';
      const textBox = document.createElement('input');
      textBox.id = e.target.id;
      for (let a = 0; a < firefox[1].children.length; a += 1) {
        firefox[1].children[a].style.display = 'none';
      }
      textBox.type = 'text';
      textBox.className = 'text-box';
      textBox.value = firefox[0].innerHTML;
      firefox[1].appendChild(textBox);
      document.querySelector('.text-box').addEventListener('keyup', (event) => {
        if (event.keyCode === 13) {
          todosList.forEach((a) => {
            if (a.id === firefox[0].id) {
              a.description = textBox.value;
              createTodo(todosList);
              window.location.reload();
            }
          });
        }
      });
    });
  }
}
