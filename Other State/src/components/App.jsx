import React, { useState } from "react";

function App() {

const [fullName,setFullName]=useState({fName:"",lName:""});


  function HandleName(e)
  { 

    const newValue=e.target.value
    console.log(newValue)
    const nameType=e.target.name;
    setFullName((prev)=>{

      if(nameType==="fName"){
      return {
        fName:newValue,
        lName:prev.lName
      };}
      else if(nameType==="lName"){
        return {
          fName:prev.fName,
          lName:newValue
        };}
      }
    );
  }

  return (
    <div className="container">
      <h1> Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input name="fName" onChange={HandleName}
         value={fullName.fName}
         placeholder="First Name" />
        <input name="lName" onChange={HandleName} 
        value={fullName.lName}
        placeholder="Last Name" />
        <button type="submit" onClick={HandleName}>Submit</button>
      </form>
    </div>
  );
}

export default App;




// function App() {
//   const [fName,setfName]=useState("")
//   const [lName,setlName]=useState("")
// const [Name,setName]=useState("")

// function Getfname(e)
// {
//   setfName(e.target.value)
// }

// function Getlname(e)
// {
//   setlName(e.target.value)
// }

//   function HandleName(e)
//   {
//     setName(`${fName} ${lName}`);
//     e.preventDefault();
//   }

//   return (
//     <div className="container">
//       <h1>Hello {Name}</h1>
//       <form>
//         <input name="fName" onChange={Getfname} value={fName} placeholder="First Name" />
//         <input name="lName" onChange={Getlname} value={lName} placeholder="Last Name" />
//         <button type="submit" onClick={HandleName}>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;
