// import React ,{ useState } from "react";



// function App() {
// // let num=0;
// // const state= useState();
// const [count,setCount]=useState(0)
// console.log(count);

// function increase()
// {
//   setCount(count+1)
//   // num++;
//     // <div className="container">
//     //   <h1>{num}</h1>
//     //   <button onClick={increase} type="button">+</button>
//     // </div>
  
// }

// function decrease(){
//   setCount(count-1)
// }
// // console.log("I got clicked",num);

//   return  ( <div className="container">
//   <h1>{count}</h1>
//   <button onClick={increase} type="button">+</button>
//   <button onClick={decrease} type="button">-</button>
// </div>);
// }

// export default App;

























import React ,{useState} from "react";


function App()
{
  const [count,setState]=useState(0)

  function increase()
  {
    setState(count+1);

  }

  function decrease()
  {
    setState(count-1);
    
  }

  return <div>
    <h1>{count}</h1>
    <button type="button" onClick={increase}>+</button>
    <button type="button" onClick={decrease}>-</button>
  </div>
}

export default App;