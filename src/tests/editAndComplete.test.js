/**
 * @jest-environment jsdom
 */

import {jest} from '@jest/globals';
import TodosClass from "../modules/todosClass";

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
         todos.markCompleted(taskToSet)


         expect(todos.list[0].completed).toBe(true)
    })
})