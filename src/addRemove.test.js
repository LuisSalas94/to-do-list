/**
 * @jest-environment jsdom
 */

import createTodo from './modules/createTodo.js';

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
});
