import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo, index, toggleTodo) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id + Math.random()}
            index={index}
            onChange={props.onToggle}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
