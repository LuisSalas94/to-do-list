/**
 * @jest-environment jsdom
 */

import {
  createTodo,
  modifyTask,
  changeCompleted,
} from './modules/createTodo.js';
import { deleteTodos } from './modules/delete.js';

describe('Test edit tasks, if it is completed and the clear completed button', () => {
  test('Test edit function', () => {
    document.body.innerHTML = `
    <div class="todos-body"></div>
    <button class="deleteBtn" id="deleteBtn">Clear all completed</button>
    `;

    let todosList = [];
    const todoObj = {
      description: 'test',
      completed: false,
      id: todosList.length + 1,
    };
    const todoObj1 = {
      description: 'test',
      completed: false,
      id: todosList.length + 1,
    };
    todosList.push(todoObj);
    createTodo(todosList);
    todosList.push(todoObj1);
    createTodo(todosList);

    const input = document.getElementById(1);
    const sibling = input.nextSibling;
    sibling.value = 'sometext';
    modifyTask(sibling);
    todosList = JSON.parse(localStorage.getItem('to-do'));
    expect(todosList[0].description).toMatch('sometext');
  });

  test('Test completed tasks', () => {
    const input = document.getElementById(2);
    changeCompleted(input.parentElement);
    const todosList = JSON.parse(localStorage.getItem('to-do'));
    expect(todosList[1].completed).toBeTruthy();
  });

  test('Test clear all completed tasks', () => {
    const btn = document.getElementById('deleteBtn');
    deleteTodos(btn);
    btn.click();
    const todosList = JSON.parse(localStorage.getItem('to-do'));
    expect(todosList).toHaveLength(1);
  });
});
