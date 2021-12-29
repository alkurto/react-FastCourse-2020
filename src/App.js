import React, { useState } from "react";
import TodoList from "./Todo/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, completed: false, title: " Купить муки" },
    { id: 1, completed: false, title: " Купить молока" },
    { id: 1, completed: false, title: "Купить масла" },
  ]);

  function checkboxHandler(todo) {
    todos.map((todo) => {
      todo.completed = !todo.completed;
      console.log(todo.completed);
    });
  }

  return (
    <div className="App">
      <div className="wrapper">
        <h1>React tutorial</h1>
        <TodoList todos={todos} onMark={checkboxHandler} />
      </div>
    </div>
  );
}

export default App;
