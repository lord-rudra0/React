import React from "react";
import Login from "./login";
// import Input from "./input";

const is_login=true;

function isLogin(){
  if(is_login){
    return <h1>Hello</h1>
  }
   return <Login />  
}

function App() {
  return (
    <div className="container">
      {/* <h1>Hello</h1>
      <Login /> */}
      {isLogin()}
    </div>
  );
}

export default App;
