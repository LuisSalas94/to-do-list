import "./style.css";

const todos = [
	{
		description: "read a book",
		completed: true,
		index: 0,
	},
	{
		description: "play videogames",
		completed: false,
		index: 1,
	},
	{
		description: "walk the dog",
		completed: true,
		index: 2,
	},
];

const container = document.querySelector(".todo-container");
const displayTodos = () => {
	let displayTodo = todos.map((todo) => {
		return `
    	<li class="todo">
			<input type="checkbox" name="" id="" />
			${todo.description} <i class="fa-solid fa-ellipsis-vertical"></i>
			</li>
      <hr class="line"/>
    `;
	});
	displayTodo = displayTodo.join("");
	container.innerHTML = displayTodo;
};

window.addEventListener("DOMContentLoaded", () => {
	displayTodos(todos);
});
