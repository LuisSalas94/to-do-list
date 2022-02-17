import './style.css';

import createTodo from './modules/createTodo.js';
import removeTodo from './modules/delete.js';
import editTodo from './modules/edit.js';

const todoBtn = document.querySelector('#createTodo');
const makeTodo = document.querySelector('#newTodo');
let todosList = JSON.parse(localStorage.getItem('to-do'));

if (todosList === null) {
  todosList = [];
}

window.addEventListener('load', createTodo(todosList));
// Add To-do functionality
todoBtn.addEventListener('click', () => {
  const { value } = makeTodo;
  const todoObj = {
    description: value,
    completed: false,
    id: todosList.length + 1,
  };
  todosList.push(todoObj);
  createTodo(todosList);
  window.location.reload();
});

// Delete To-do functionality
window.deleteTodo = (id) => {
  removeTodo(id, todosList);
};

// Edit To-do functionality
const spanElements = document.getElementsByTagName('span');
editTodo(spanElements, todosList);
