import React ,{ useState } from "react";



function App() {
// let num=0;
// const state= useState();
const [count,setCount]=useState(0)
console.log(count);

function increase()
{
  setCount(count+1)
  // num++;
    // <div className="container">
    //   <h1>{num}</h1>
    //   <button onClick={increase} type="button">+</button>
    // </div>
  
}

// console.log("I got clicked",num);

  return  ( <div className="container">
  <h1>{count}</h1>
  <button onClick={increase} type="button">+</button>
</div>);
}

export default App;
