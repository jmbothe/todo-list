var todoList = {

  todos: [],

  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
  },

  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },

  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },

  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },

  toggleAll: function() {
    var statusAll = [];

    for (var i=0; i<this.todos.length; i++) {
      statusAll.push(this.todos[i].completed);
    }
    if (statusAll.indexOf(false)===-1) {
      for (var i=0; i<this.todos.length; i++) {
        this.todos[i].completed = false;
      }
    } else {
      for (var i=0; i<this.todos.length; i++) {
        this.todos[i].completed = true;
      }
    }
  },
};

var handlers = {
  addTodo: function() {
    var addTodoTextInput = document.getElementById("addTodoTextInput");
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = "";
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
    var changeTodoTextInput = document.getElementById("changeTodoTextInput");
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = "";
    changeTodoTextInput.value = "";
    view.displayTodos();
  },
  deleteTodo: function(position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function() {
  var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
  todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
  toggleCompletedPositionInput.value = "";
  view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  },
};

var view = {
  displayTodos: function () {
    var todosUl = document.querySelector("ul");
    todosUl.innerHTML = "";

    for (var i=0; i<todoList.todos.length; i++) {

      var todoLi = document.createElement("li");

      var todoStatus;

        if (todoList.todos[i].completed) {
          todoStatus = "(X) ";
        } else {
          todoStatus = "( ) ";
        }
        todoLi.id = "li-" + i;
      todoLi.textContent = todoStatus + todoList.todos[i].todoText;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    return deleteButton;
  },
  setUpEventListeners: function() {
    var todosUl = document.querySelector("ul");

    todosUl.addEventListener("click", function(e) {
      if (e.target.className === "deleteButton") {
        handlers.deleteTodo(parseInt(e.target.parentNode.id));
      }
    });
  }
}

view.setUpEventListeners();

//OLD MESSY WAY TO HANDLE EVENTS: VERSION 7
//
// var displayTodosButton = document.getElementById("displayTodosButton");
// var toggleAllButton = document.getElementById("toggleAllButton");
//
// displayTodosButton.addEventListener("click", function() {
//   todoList.displayTodos();
// });
//
// toggleAllButton.addEventListener("click", function() {
//   todoList.toggleAll();
// });


// GORDON'S TOGGLE ALL FUNCTION
//
//  toggleAll: function() {
//
//    var totalTodos = this.todos.length;
//    var completedTodos = 0;
//
//    for (var i=0; i<totalTodos; i++) {
//      if (this.todos[i].completed === true) {
//        completedTodos++;
//      }
//    }
//    if (completedTodos === totalTodos) {
//      for (var i=0; i<totalTodos; i++) {
//        this.todos[i] = false;
//      }
//    } else {
//     for (var i=0; i<totalTodos; i++) {
//     this.todos[i] = true;
//     }
//   }
//   this.displayTodos();
// }


// VERSION 1 & 2

// var todos = ["item 1", "item 2", "item 3"];
//
// function displayTodos() {
//   console.log("To do:", todos);
// }
//
// function addTodo(todo) {
//   todos.push(todo);
//   displayTodos();
// }
//
// function changeTodo(position, value) {
//   todos[position] = value;
//   displayTodos();
// }
//
// function deleteTodo(position) {
//   todos.splice(position, 1);
//   displayTodos();
// }
