import updateLocalStorage from './checkbox.js';

export default function createTodo(todos) {
  const todosBody = document.querySelector('.todos-body');
  todosBody.innerHTML = '';

  const todoUl = document.createElement('ul');

  todos.forEach((todo) => {
    const li = document.createElement('li');
    li.setAttribute('id', 'checkbox');

    if (todo.completed === true) {
      li.className = 'line';
    } else {
      li.className = '';
    }

    const input = document.createElement('input');
    input.id = todo.id;
    input.type = 'checkbox';
    input.name = 'checkbox';

    const spanEle = document.createElement('span');
    spanEle.id = todo.id;

    const btn = document.createElement('button');
    input.checked = todo.completed;
    li.appendChild(input);
    spanEle.innerHTML = todo.description;
    li.appendChild(spanEle);
    li.appendChild(btn);
    btn.id = todo.id;
    btn.setAttribute('onclick', 'deleteTodo(this.id)');
    btn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    todoUl.appendChild(li);
    todosBody.appendChild(todoUl);
  });
  updateLocalStorage(todos);
}
