import React from "react";
import ReactDOM from "react-dom";


// use of render

// ReactDOM.render(
//   <div>
//     <h1>this is h1</h1>
//     <ul>
//       <li>list1</li>
//       <li>list2</li>
//       <li>list3</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );


// use of variable in js code 


const name = "rudra";
const lucy = 17;

ReactDOM.render(
  <div>
    <h1>Hello {name} </h1>
    <p1>My lucky number is {lucy}</p1>
  </div>,
  document.getElementById("root")
);
