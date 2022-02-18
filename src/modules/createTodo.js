import updateLocalStorage from './checkbox.js';

function changeCompleted(input) {
  const tasklist = input.parentElement.children;
  const array = JSON.parse(localStorage.getItem('to-do'));

  for (let i = 0; i < tasklist.length; i += 1) {
    if (tasklist[i] === input) {
      if (array[i].completed === false) {
        array[i].completed = true;
      } else {
        array[i].completed = false;
      }
    }
  }
  localStorage.setItem('to-do', JSON.stringify(array));
  /* eslint-disable-next-line */
	createTodo(array);
}

function modifyTask(spanEle) {
  const taskChanged = spanEle.parentElement;
  const tasklist = taskChanged.parentElement.children;
  const array = JSON.parse(localStorage.getItem('to-do'));

  for (let i = 0; i < tasklist.length; i += 1) {
    if (tasklist[i] === taskChanged) {
      array[i].description = spanEle.value;
    }
  }
  localStorage.setItem('to-do', JSON.stringify(array));
  /* eslint-disable-next-line */
	createTodo(array);
}

export default function createTodo(todos) {
  const todosBody = document.querySelector('.todos-body');
  todosBody.innerHTML = '';

  const todoUl = document.createElement('ul');

  let index = 0;

  todos.forEach((todo) => {
    const li = document.createElement('li');
    li.setAttribute('id', 'checkbox');

    if (todo.completed === true) {
      li.className = 'line';
    } else {
      li.className = '';
    }

    index += 1;
    todo.id = index;

    const input = document.createElement('input');
    input.id = todo.id;
    input.type = 'checkbox';
    input.name = 'checkbox';
    input.addEventListener('change', () => {
      changeCompleted(input.parentElement);
    });
    if (todo.completed === true) {
      input.setAttribute('checked', true);
      li.className = 'line';
    } else {
      li.className = '';
    }

    const spanEle = document.createElement('input');
    spanEle.setAttribute('type', 'text');
    spanEle.classList = 'input-element';
    spanEle.value = todo.description;
    spanEle.addEventListener('focus', () => {
      li.classList.toggle('change-color');
    });
    spanEle.addEventListener('blur', () => {
      li.classList.toggle('change-color');
    });
    spanEle.addEventListener('change', () => {
      modifyTask(spanEle);
    });
    spanEle.id = todo.id;

    const btn = document.createElement('button');
    input.checked = todo.completed;
    li.appendChild(input);
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
