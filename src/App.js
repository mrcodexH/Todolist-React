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
  // create a new todo item
  const createTodoItem = (todo) => {
    const newTodoItems = [...TodoItems, { todo, complete: false }];
    setTodoItems(newTodoItems);
  };
  // delete the todo item
  const deleteTodoItem = (index) => {
    const newTodoItems = [...TodoItems];
    newTodoItems.splice(index, 1);
    setTodoItems(newTodoItems);
  };
  return (
    <div className="App">
      <TodoInput createTodoItem={createTodoItem} />
      {TodoItems.map((item, index) => (
        <TodoItem
          key={index}
          index={index}
          item={item}
          deleteTodoItem={deleteTodoItem}
        />
      ))}
    </div>
  );
}

export default App;
