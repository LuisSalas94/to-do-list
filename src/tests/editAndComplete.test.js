/**
 * @jest-environment jsdom
 */

import {jest} from '@jest/globals';
import TodosClass from "../modules/todosClass";
import { clear } from '../modules/clearCompletedTodos.js'

describe('Modify Status function test', () => {
    it('task should change completed status from false to true', () => {

        document.body.innerHTML =`
         <ul class="todos-list container">
        <div class="flex-item" data-value="0">
        <div class="container">
        <div class="input">
        <input class="check" type="checkbox" name="description" id="description">
        <p class="task-description" contenteditable for="description">description</p>
        </div>
        <i class="far fa-trash remove-btn trash"></i>
        </div>
        </ul>
        `

        const todos = new TodosClass();
        const task = { description: 'A new test task', completed: false, index: 0 };
        const taskToSet = document.querySelector('.check')


        todos.create(task)
         todos.setCompleted(taskToSet)


         expect(todos.list[0].completed).toBe(true)
    })
})

describe('Edit test', () => {
    it('Input rith contenteditable attribute edit description', () => {
        document.body.innerHTML = `
        <ul class="todo-list container">
        <div class="flex-item" data-value="0">
        <div class="container">
        <div class="input">
        <input class="check" type="checkbox" name="description" id="description">
        <p class="task-description" contenteditable for="description">description</p>
        </div>
        <i class="far fa-trash remove-btn trash"></i>
        </div>
        </ul>
        `
        const todos = new TodosClass();
        const task = { description: 'A new test task', completed: false, index: 0 }
        const editedTask = { description: 'Edited task', completed: false, index: 0 }

        todos.create(task)
        todos.edit(editedTask)

        expect(todos.list[0].description).toBe('Edited task')
    })
})

    describe('test clear completed tasks', () => {
        test('Delete the tasks that are completed', () => {

            const todos = new TodosClass();
  
      const taskList = [
        { description: 'A new test task 1', completed: false, index: 0 },
        { description: 'A new test task 2', completed: false, index: 1 },
        { description: 'A new test task 3', completed: false, index: 2 },
        { description: 'A new test task 4', completed: true, index: 3 },
      ];
  

      todos.create(taskList[0]);
      todos.create(taskList[1]);
      todos.create(taskList[2]);
      todos.create(taskList[3]);
  
      todos.list = clear(taskList);
  

      
      expect(todos.list.length).toBe(3);
    });
  });