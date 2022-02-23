const todoList = document.querySelector('.todos-list');

export function clear(list) {
  const arr = list.filter((task) => task.completed === false);
  return arr;
}

export function removeElements(list) {
  const indexes = [];
  list.forEach((item) => {
    if (item.completed) {
      indexes.push(item.index);
    }
  });
  for (let i = indexes.length - 1; i >= 0; i -= 1) {
    if (todoList.children[indexes[i]].children[0]) {
      todoList.children[indexes[i]].children[0].parentNode.remove();
    }
  }
}
