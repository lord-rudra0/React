// import React, {useState} from "react";



// function App() {

// // function coloreChange()
// // {
  
// // }
// const [Over_color,setOver_color]=useState("white=");

// // const Over_color={
// //   color:"white"
// // }
// function coloreChange(e){
//   setOver_color("black")
// }

// function ColorOut()
// {
//   setOver_color("white")
// }

//   return (
//     <div className="container">
//       <h1>Hello</h1>
//       <input type="text"  onClick={coloreChange} placeholder="What's your name?" />
//       <button type="button" style={{backgroundColor:Over_color}} onMouseOver={coloreChange} onMouseOut={ColorOut} onFocus={coloreChange} onBlur={ColorOut}>Submit</button>
//     </div>
//   );
// }

// export default App;


import React, {useState} from "react";



function App() {

// function coloreChange()
// {
  
// }
const [Over_color,setOver_color]=useState(false);

// const Over_color={
//   color:"white"
// }
function coloreChange(){
  setOver_color(true)
}

function ColorOut()
{
  setOver_color(false)
}

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text"  onClick={coloreChange} placeholder="What's your name?" />
      <button type="button" style={{backgroundColor:Over_color? "black":"white"}} onMouseOver={coloreChange} onMouseOut={ColorOut} onFocus={coloreChange} onBlur={ColorOut}>Submit</button>
    </div>
  );
}

export default App;

