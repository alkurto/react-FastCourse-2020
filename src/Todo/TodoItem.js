import React, { useContext } from "react";
import Context from "../context";

function TodoItem(props) {
  const { removeTodo } = useContext(Context);
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

      <button onClick={removeTodo.bind(null, props.todo.id)}>&times;</button>
    </li>
  );
}

export default TodoItem;
