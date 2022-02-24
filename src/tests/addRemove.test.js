/**
 * @jest-environment jsdom
 */
import {jest} from '@jest/globals'
import TodosClass from '../modules/todosClass.js';
import getTasksLocalStorage from '../__mocks__/getLocalStorage.js';
import setTasksLocalStorage from '../__mocks__/setLocalStorage.js';

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }
}

describe('Testing Add', () => {
  
  it('New task description inserted in task container is abc', () => {
    const todos = new TodosClass();
    const tasksContainer = [{ description: 'abc', completed: true, index: 0 }];
    
    const result = todos.create(tasksContainer[0]);
    
    expect(result.description).toBe('abc');
  });

  it(' after saving a task local storage is length 1', () => {
    const tasksContainer = [{ description: 'abc', completed: true, index: 0 }];

    setTasksLocalStorage(tasksContainer);
    const result = getTasksLocalStorage();

    expect(result.length).toBe(1);
  });
});

describe('Testing remove', () => {
  it('taskContainer length after deleting the only task, is 0', () => {

    document.body.innerHTML = ` <ul class="todos-list flex-container">
        <div class="flex-item" data-value="0">
        <div class="flex-container">
        <div class="input">
        <input class="check" type="checkbox" name="description" id="description">
        <p class="task-description" contenteditable for="description">description</p>
        </div>
        <i class="far fa-trash remove-btn trash"></i>
        </div>
        </div>
        </ul>`;

    const removeTask = document.querySelector('.flex-item');
    const todos = new TodosClass();
    const tasksContainer = [
      {
        description: 'abc',
        completed: false,
        index: 0,
      },
    ];

    todos.create(tasksContainer[0]);
    todos.deleteTask(removeTask);

    expect(todos.list.length).toBe(0);
  });
});

global.localStorage = new LocalStorageMock();
