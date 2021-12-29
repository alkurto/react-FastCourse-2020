import React from "react";

function TodoItem(props) {
  return (
    <li>
      <span>
        <input type="checkbox" onChange={toggleTodo} />
        <strong>{props.index + 1}</strong>
        {props.todo.title}
      </span>

      <button>&times;</button>
    </li>
  );
}

export default TodoItem;
