import React from "react";

const TodoItem = ({ item, index, deleteTodoItem }) => {
  return (
    <div className="todo-list">
      <li> {item.todo} </li>
      <div className="btns">
        <button onClick={() => deleteTodoItem(index)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
