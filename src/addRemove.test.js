/**
 * @jest-environment jsdom
 */

import createTodo from './modules/createTodo.js';
import { removeTodo } from './modules/delete.js';

describe('Test for add and remove function', () => {
  test('Add tasks', () => {
    document.body.innerHTML = `
    <div class="todos-body"></div>
    `;

    const todosList = [];
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
    const tasks = document.querySelectorAll('li');
    expect(tasks).toHaveLength(2);
  });

  test('Remove task', () => {
    removeTodo(1);
    const todosList = JSON.parse(localStorage.getItem('to-do'));
    expect(todosList).toHaveLength(1);
  });
  test('Remove task on DOM', () => {
    const tasks = document.querySelectorAll('li');
    expect(tasks).toHaveLength(1);
  });
});
