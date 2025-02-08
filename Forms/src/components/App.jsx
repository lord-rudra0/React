import React ,{useState} from "react";

function App() {

  const [Username,getUsername]=useState("");
  const [name,setName]=useState("");

  function HandleEvent(e)
  {
    console.log(e.target.value);
    getUsername(e.target.value);
    // const Username=e.target.value
    // console.log(Username)
  }

  function getName(e)
  {
    console.log("Submitted")
    // getUsername(e.target.value)
    setName(Username)


    e.preventDefault();

  }

  return (
    <div className="container">
      <h1>Hello {name} </h1>
      <form>
      <input
          value={Username}
          onChange={HandleEvent} 
            // onClick={getName} 
          // onSubmit={getName}
          // onClick={getName}
          type="text" 
          placeholder="What's your name?" />
      <button  type="button" onClick={getName}>Submit</button>
      </form>
      {/* <input
          value={Username}
          onChange={HandleEvent} 
            // onClick={getName} 
          // onSubmit={getName}
          // onClick={getName}
          type="text" 
          placeholder="What's your name?" />
      <button  type="button" onClick={getName}>Submit</button> */}
    </div>
  );
}

export default App;
