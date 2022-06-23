import React, { useState } from "react";

const TodoInput = ({ createTodoItem }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      return console.log("Please add something to your todo list");
    }
    createTodoItem(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo item"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
};

export default TodoInput;
