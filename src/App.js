import React, { useState } from "react";
import TodoList from "./Todo/TodoList";

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

  return (
    <div className="App">
      <div className="wrapper">
        <h1>React tutorial</h1>
        <TodoList todos={todos} onToggle={todoCompletedHandler} />
      </div>
    </div>
  );
}

export default App;
