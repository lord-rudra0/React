// import React from "react"
// import ReactDOM from "react-dom"
// import animals from "./data"

// const[cats,dogs]=animals;
// console.log(animals,cats,dogs)

// const {name:catName,sound:catSound}=cats;
// console.log(catName,catSound)

// CHALLENGE: uncomment the code below and see the car stats rendered
// import express from "express";
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";


const [tesla,honda]=cars;

console.log(cars)
console.log(tesla)
// const {model:teslaModel, coloursByPopularity:[teslaTopColour,teslaOptionColor],speedStats:{topSpeed:teslaTopSpeed,zeroToSixty:teslaZeroToSixty}}=tesla;
// const {model:hondaModel, coloursByPopularity:[hondaTopColour,hondaOptionColor],speedStats:{topSpeed:hondaTopSpeed,zeroToSixty:hondaZeroToSixty}}=honda; 
// console.log(model)

const {model:teslaModel, coloursByPopularity:[teslaTopColour],speedStats:{topSpeed:teslaTopSpeed}}=tesla;
const {model:hondaModel, coloursByPopularity:[hondaTopColour],speedStats:{topSpeed:hondaTopSpeed}}=honda; 
console.log(teslaModel)
console.log(hondaModel)
// console.log(teslaTopColour)
// console.log(teslaOptionColor)
// console.log(hondaOptionColor)
// console.log(teslaZeroToSixty)
// console.log(hondaZeroToSixty)
ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
