import TodosClass from './modules/todosClass.js';
import ItemClass from './modules/itemClass.js';
import { clear, removeElements } from './modules/clearCompletedTodos.js';
import './style.css';

const Todos = new TodosClass();
const input = document.querySelector('.input-task');

if (localStorage.getItem('todoList')) {
  const storageItems = JSON.parse(localStorage.getItem('todoList')).todoList;
  storageItems.forEach((task) => {
    Todos.display(new ItemClass(task.index, task.description, task.completed));
  });
}

window.addEventListener('keydown', (e) => {
  if (e.keyCode === 13 && input.value !== '') {
    Todos.display(new ItemClass(Todos.list.length, input.value, false));
    input.value = '';
  }
});

const clearButton = document.querySelector('.clear-completed');

clearButton.addEventListener('click', () => {
  const ogArray = Todos.list;
  Todos.list = clear(Todos.list);
  Todos.setStorage();
  removeElements(ogArray);
});
