'use strict';

var todoList = {

  todos: [],

  addTodo: function addTodo(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function changeTodo(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function deleteTodo(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function toggleCompleted(position) {
    this.todos[position].completed = !this.todos[position].completed;
  },
  toggleAll: function toggleAll() {
    var statusAll = [];
    this.todos.forEach(function (todo) {
      statusAll.push(todo.completed);
    });
    this.todos.forEach(function (todo) {
      if (statusAll.indexOf(false) === -1) {
        todo.completed = false;
      } else {
        todo.completed = true;
      }
    });
  }
};

var handlers = {
  addTodo: function addTodo() {
    var addTodoTextInput = document.querySelector('.add-todo-text-input');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function changeTodo(position) {
    view.displayTodos(position);
  },
  saveChangeTodo: function saveChangeTodo(position) {
    var changeTodoTextInput = document.querySelector('.change-todo-text-input');
    todoList.changeTodo(position, changeTodoTextInput.value);
    view.displayTodos();
  },
  deleteTodo: function deleteTodo(position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function toggleCompleted(position) {
    todoList.toggleCompleted(position);
    view.displayTodos();
  },
  toggleAll: function toggleAll() {
    todoList.toggleAll();
    view.displayTodos();
  }
};

var view = {
  displayTodos: function displayTodos(position) {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';

    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');

      todosUl.appendChild(todoLi);
      todoLi.id = i;

      todoLi.appendChild(this.createCheckbox());
      document.querySelector('li:nth-of-type(' + (i + 1) + ') > input[type=\'checkbox\']').checked = todoList.todos[i].completed;

      if (position === i) {
        todoLi.appendChild(this.createChangeTextbox(todoList.todos[i].todoText));
        document.querySelector('.change-todo-text-input').focus();
      } else {
        todoLi.appendChild(this.createTodoText(todoList.todos[i].todoText));
        if (todoList.todos[i].completed) {
          document.querySelector('li:nth-of-type(' + (i + 1) + ') > label').style.textDecoration = 'line-through';
        }
      }
      todoLi.appendChild(this.createDeleteButton());
    }
  },
  createCheckbox: function createCheckbox() {
    var checkbox = document.createElement('input');
    checkbox.className = 'toggle-todo-checkbox';
    checkbox.type = 'checkbox';
    return checkbox;
  },
  createTodoText: function createTodoText(content) {
    var label = document.createElement('label');
    label.className = 'todo-text';
    label.textContent = content;
    return label;
  },
  createDeleteButton: function createDeleteButton() {
    var deleteButton = document.createElement('img');
    deleteButton.className = 'delete-button';
    deleteButton.src = 'assets/icons/delete.png';
    return deleteButton;
  },
  createChangeTextbox: function createChangeTextbox(content) {
    var changeTextbox = document.createElement('input');
    changeTextbox.placeholder = content;
    changeTextbox.className = 'change-todo-text-input';
    changeTextbox.type = 'text';
    return changeTextbox;
  },
  setUpEventListeners: function setUpEventListeners() {
    var todosUl = document.querySelector('ul');

    todosUl.addEventListener('click', function (e) {
      if (e.target.className === 'delete-button') {
        handlers.deleteTodo(parseInt(e.target.parentNode.id));
      } else if (e.target.className === 'toggle-todo-checkbox') {
        handlers.toggleCompleted(parseInt(e.target.parentNode.id));
      } else if (e.target.className === 'todo-text') {
        handlers.changeTodo(parseInt(e.target.parentNode.id));
      }
    });
    todosUl.addEventListener('keypress', function (e) {
      if (e.keyCode === 13) {
        handlers.saveChangeTodo(parseInt(e.target.parentNode.id));
      }
    });
    document.querySelector('.add-todo-text-input').addEventListener('keypress', function (e) {
      if (e.keyCode === 13) {
        handlers.addTodo(parseInt(e.target.parentNode.id));
      }
    });
    document.querySelector('.toggle-all-button').addEventListener('click', function () {
      handlers.toggleAll();
    });
  }
};

view.setUpEventListeners();