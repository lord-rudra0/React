import React from "react";
import Login from "./login";
// import Input from "./input";

const is_login=false;

// function isLogin(){
//   if(is_login){
//     return <h1>Hello</h1>
//   }
//    return <Login />  
// }

const current_time=new Date().getHours();
console.log(current_time)
function App() {
  return (
    <div className="container">
      {/* <h1>Hello</h1>
      <Login /> */}
      {/* {isLogin()} */}
      {is_login?<h1>Hello</h1>:<Login />}
      {/* {current_time>9?<h1>Class Time</h1>:null} */}
     {/* { current_time>9&&<h1>Class Time</h1>} */}
    </div>
  );
}

export default App;
