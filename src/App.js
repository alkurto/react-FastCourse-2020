import React, { useState } from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, completed: false, title: " Купить муки" },
    { id: 2, completed: true, title: " Купить молока" },
    { id: 3, completed: false, title: "Купить масла" },
  ]);

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
  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: todos.length,
          completed: false,
        },
      ])
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <Context.Provider value={{ removeTodo: removeTodo }}>
      <div className="App">
        <div className="wrapper">
          <h1>TodoList</h1>
          <AddTodo onCreate={addTodo} />
          {todos.length ? (
            <TodoList todos={todos} onToggle={todoCompletedHandler} />
          ) : (
            <p>No todos!</p>
          )}
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
