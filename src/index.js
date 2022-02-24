import './style.css';

import { createTodo } from './modules/createTodo.js';
import { removeTodo, deleteTodos } from './modules/delete.js';

const todoBtn = document.querySelector('#createTodo');
const makeTodo = document.querySelector('#newTodo');
const deleteBtn = document.querySelector('#deleteBtn');
let todosList = JSON.parse(localStorage.getItem('to-do'));

if (todosList === null) {
  todosList = [];
}

deleteTodos(deleteBtn, todosList);

window.addEventListener('load', createTodo(todosList));
// Add To-do functionality
todoBtn.addEventListener('click', () => {
  todosList = JSON.parse(localStorage.getItem('to-do'));
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
