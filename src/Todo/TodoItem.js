import React from "react";

function TodoItem(props) {
  const classes = [];
  if (props.todo.completed) {
    classes.push("done");
  }
  return (
    <li>
      <span className={classes.join(" ")}>
        <input
          type="checkbox"
          checked={props.todo.completed}
          onChange={() => props.onChange(props.todo.id)}
        />
        <strong>{props.index + 1}</strong>
        {props.todo.title}
      </span>

      <button>&times;</button>
    </li>
  );
}

export default TodoItem;
