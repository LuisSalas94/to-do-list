export default class TodosClass {
  constructor(list = []) {
    this.list = list;
  }

  create(data) {
    this.list.push(data);
    localStorage.setItem(
      'todoList',
      JSON.stringify({
        todoList: this.list,
      }),
    );
    return data;
  }

  display = (data) => {
    this.create(data);
    const todosList = document.querySelector('.todos-list');
    const todoItem = document.createElement('div');
    todoItem.classList.add('flex-item');

    if (data.completed) {
      todoItem.innerHTML = `<div class="container">
      <div class="input">
      <input class="check" type="checkbox" name="${data.description}" id="${data.description}" CHECKED>
      <p class="task-description checked" contenteditable for="${data.description}">${data.description}</p>
      </div>
      <i class="far fa-trash remove-btn trash"></i>
      </div>`;
    } else {
      todoItem.innerHTML = `<div class="container">
      <div class="input">
      <input class="check" type="checkbox" name="${data.description}" id="${data.description}">
      <p class="task-description" contenteditable for="${data.description}">${data.description}</p>
      </div>
      <i class="far fa-trash-alt remove-btn trash"></i>
      </div>`;
    }
    todosList.appendChild(todoItem);
    this.arrange();
    this.remove();
    this.edit();
    this.addCompletedListener();
    this.setStorage();
  }

  arrange() {
    const delBtns = document.querySelectorAll('.remove-btn');
    for (let i = 0; i < delBtns.length; i += 1) {
      this.list[i].index = i;
      delBtns[i].setAttribute('data-value', i);
    }
  }

  remove() {
    const todosList = document.querySelector('.todos-list');
    const delBtns = document.querySelectorAll('.remove-btn');
    delBtns[delBtns.length - 1].addEventListener('click', (e) => {
      this.deleteTask(e.target);
      todosList.removeChild(e.target.parentNode.parentNode);
      this.arrange();
      this.setStorage();
    });
  }

  deleteTask(node) {
    const removeIndex = parseInt(node.getAttribute('data-value'), 10);
    this.list = this.list.filter((item) => removeIndex !== item.index);
  }

  setStorage() {
    localStorage.setItem(
      'todoList',
      JSON.stringify({
        todoList: this.list,
      }),
    );
  }

  edit() {
    const editable = document.querySelectorAll('.task-description');
    editable[editable.length - 1].addEventListener('focus', (e) => {
      const index = e.target.parentNode.nextSibling.nextSibling.getAttribute('data-value');
      const trashBtn = document.getElementsByClassName('trash');

      const dotsBtn = document.getElementsByClassName('dots');
      trashBtn[index].classList.remove('disabled');
      dotsBtn[index].classList.add('disabled');
    });
    editable[editable.length - 1].addEventListener('blur', (e) => {
      const index = e.target.parentNode.nextSibling.nextSibling.getAttribute('data-value');
      const trashBtn = document.getElementsByClassName('trash');
      const dotsBtn = document.getElementsByClassName('dots');
      setTimeout(() => {
        if (trashBtn[index] && dotsBtn[index]) {
          trashBtn[index].classList.add('disabled');
          dotsBtn[index].classList.remove('disabled');
        }
      }, 90);
    });

    editable[editable.length - 1].addEventListener('input', (e) => {
      const index = e.target.parentNode.nextSibling.nextSibling.getAttribute('data-value');
      this.list[index].description = e.target.textContent;
      this.setStorage();
    });
  }

  addCompletedListener() {
    const checker = document.querySelectorAll('.check');
    checker[checker.length - 1].addEventListener('change', (e) => {
      e.target.parentNode.children[1].classList.toggle('checked');
      this.addCompletedListener(e)
    })
  }

    setComplete(e, taskToSet) {
      if (typeof e === "undefined") {
        this.setComplete(taskToSet)
      } else {
        const index = e.target.parentNode.parentNode.children[1].getAttribute('data-value');
          this.list[index].completed = !this.list[index].completed;
          this.setStorage();
    }
  }

  setCompleted(taskToSet) {
    const index = taskToSet.parentNode.parentNode.parentNode.getAttribute('data-value')
    this.list[index].completed = !this.list[index].completed;
    this.setStorage();
  }
}
