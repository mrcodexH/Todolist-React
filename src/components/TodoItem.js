import React from "react";

const TodoItem = ({ item, index }) => {
  return (
    <div className="todo-list">
      <li> {item.todo} </li>
    </div>
  );
};

export default TodoItem;
