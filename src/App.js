import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

function App() {
  const [TodoItems, setTodoItems] = useState([
    { todo: "Mow the lawn", complete: false },
    { todo: "Do laundry", complete: false },
    { todo: "Make Dinner", complete: false },
  ]);
  return (
    <div className="App">
      <TodoInput />
      {TodoItems.map((item, index) => (
        <TodoItem key={index} index={index} item={item} />
      ))}
    </div>
  );
}

export default App;
