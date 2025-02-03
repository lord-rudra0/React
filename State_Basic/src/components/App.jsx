import React from "react";

let isDone = false;

function strike() {
  isDone = true;
  console.log("button clicked")
}

function unStrike() {
  isDone = false;
}

function App() {
  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button type="button" onClick={strike}>Change to strike through</button>
      <button type="button" onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;
