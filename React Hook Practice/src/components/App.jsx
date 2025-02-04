import React, { useState } from "react";



function App() {
  let curr_time = new Date().toLocaleTimeString();
  console.log(curr_time)
  const [time,getTime]=useState(curr_time);
  function findTime()
  {
    
    getTime(time)
  }

  function Refresh_Page()
  {
    window.location.reload();
    console.log("reloaded")

  }
  
// console.log(time);
  return (
    <div className="container">
      <h1>{time}</h1>
      {setInterval(Refresh_Page,500000)}
      <button onClick={findTime} type="button">Get Time</button>
    </div>
  );
}

export default App;
