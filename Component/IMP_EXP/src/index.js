import React from "react";
import ReactDOM from "react-dom";
import pie, { doublepi,triplepi } from "./math";

ReactDOM.render(
  <ul>
    <li>{pie}</li>
    <li>{doublepi()}</li>
    <li>{triplepi()}</li>
  </ul>,
  document.getElementById("root")
);
