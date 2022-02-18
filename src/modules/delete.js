import createTodo from './createTodo.js';

export function deleteTodos(deletebtn) {
  deletebtn.addEventListener('click', () => {
    const todos = JSON.parse(localStorage.getItem('to-do'));
    const array = [];
    for (let i = 0; i < todos.length; i += 1) {
      if (todos[i].completed === false) {
        array.push(todos[i]);
      }
    }
    localStorage.setItem('to-do', JSON.stringify(array));
    createTodo(array);
  });
}

export function removeTodo(deleteTask, todosList) {
  todosList = JSON.parse(localStorage.getItem('to-do'));
  /* eslint-disable-next-line */
	const index = todosList.findIndex((prop) => prop.id == deleteTask);
  todosList.splice(index, 1);
  createTodo(todosList);
}
