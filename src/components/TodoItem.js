import React from "react";

const TodoItem = ({ item, index, deleteTodoItem, completeTodoItem }) => {
  return (
    <div className="todo-list">
      <li style={{ textDecoration: item.complete ? "line-through" : "" }}>
        {item.todo}{" "}
      </li>
      <div className="btns">
        <button onClick={() => completeTodoItem(index)}>Complete</button>
        <button onClick={() => deleteTodoItem(index)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
