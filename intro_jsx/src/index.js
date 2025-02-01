import React from "react";
import ReactDOM from "react-dom";


// use of render and styles and attribute

// ReactDOM.render(
//   <div>
//     <h1 className="Heading" contentEditable="true" spellCheck="false"> this is h1</h1>
//     <ul>
//       <li>list1</li>
//       <li>list2</li>
//       <li>list3</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );


// use of variable in js code 


// ReactDOM.render(
//     <div>
//       <h1>Hello {fname + " " + mname + " " + lname} </h1>
  
//       <h1>
//         Hello {fname} {mname} {lname}
//       </h1>
  
//       <h1>Hello {`${fname} ${mname} ${lname}`}</h1>
  
//       <p1>My lucky number is {lucy}</p1>
//     </div>,
//     document.getElementById("root")

// problem 2
// Create a react app from scratch.
// It should display 2 paragraph HTML elements.
// myname="Rudra Pratap Singh";
// const this_year=new Date().getFullYear();

// ReactDOM.render(
//     <div>
//         <p1>Created By {myname}</p1>
//         <p1>Copyright {this_year}</p1>
//     </div>
//     ,document.getElementById("root")
// )
// The paragraphs should say:
// Created by YOUR NAME.
// Copyright CURRENT YEAR.
// E.g.
// Created by Angela Yu.
// Copyright 2019.

// image directly in div
// ReactDOM.render(
//     <div>
//       <h1 className="Heading" contentEditable="true" spellCheck="false"> this is h1</h1>
//       <div>
//         <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=400"></img>
//         <img src="https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=400"></img>
//         <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400"></img>
//       </div>
//     </div>,
//     document.getElementById("root")
//   );

// ?image as variable 

// const img_link="https://picsum.photos/200"
// ReactDOM.render(
//         <div>
//           <h1 className="Heading" spellCheck="false"> this is h1</h1>
//             <img src={img_link}></img>
//         </div>,
//         document.getElementById("root")
//       );

// Inline Css In React
// ReactDOM.render(
//     <h1 style={{color:"red"}}>Hello World</h1>,
//   document.getElementById("root")
// );


// store style as variable

// const h1_style={
//     color:"red",
//     fontSize:"12rem"
// }

// h1_style.color="blue"

// ReactDOM.render(
//     <h1 style={h1_style}>Hello World</h1>,
//   document.getElementById("root")
// );