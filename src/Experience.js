/*
/* Пример_1: function todoCompletedHandler(id) */

/*Работает и так*/
function todoCompletedHandler(id) {
  todos.map((todo) => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }
  });
}

/*хотя Эталон*/
function todoCompletedHandler(id) {
  setTodos(
    todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
  );
}
