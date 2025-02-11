import React, { useState } from "react";
import ToDoList from "./ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems(prev=>
    {
      return prev.filter((item,index)=>
      {
        return index!=id
      })
    }
    )
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button type="button" onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoList id={index} onChecked={deleteItem} text={todoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
