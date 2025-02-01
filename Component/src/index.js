import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading"
import List  from "./List";


// function Heading(){
// return  <h1>My Favourite Foods</h1>;
// }

ReactDOM.render(
  <div>
   {/* <Heading></Heading> */}

   <Heading />
  <List />
  </div>,
  document.getElementById("root")
);
