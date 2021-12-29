import React, { useState } from "react";

function AddTodo(props) {
  const [value, setValue] = useState("");

  function formSubmitHandler(event) {
    event.preventDefault();

    if (value.trim()) {
      props.onCreate(value);
      setValue("");
    }
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button>+</button>
    </form>
  );
}

export default AddTodo;
