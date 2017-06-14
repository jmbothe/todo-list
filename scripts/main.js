var todoList = {

  todos: [],

  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("Your todo list is empty!");
    } else {
      console.log("My Todos:");
      for (i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed===false) {
          console.log("( ) ", this.todos[i].todoText);
        } else {
          console.log("(X) ", this.todos[i].todoText);
        }
      }
    }
  },

  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
    this.displayTodos();
  },

  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },

  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },

  toggleCompleted: function(position) {
    // this.todos[position].completed = !this.todos[postion].completed;
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }

}

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
