/**
 * @jest-environment jsdom
 */

import { createTodo, modifyTask } from './modules/createTodo.js';

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
});
