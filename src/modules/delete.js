import createTodo from './createTodo.js';

export default function removeTodo(deleteTask, todosList) {
  /* eslint-disable-next-line */
	const index = todosList.findIndex((prop) => prop.id == deleteTask);
  todosList.splice(index, 1);
  createTodo(todosList);
}