var todoList = {
  todos: ["item 1", "item 2", "item 3"],
  displayTodos: function() {
    console.log(this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, todo) {
    this.todos[position] = todo;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
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
