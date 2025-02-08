import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function InputHandle(e)
  {
    const inputValue=e.target.value;
    console.log(inputValue)
    const inputName=e.target.name;
    console.log(inputName)

    setContact((prev)=>
    {
      if(inputName==="fName")
      {
        return{
            fName:inputValue,
            lName:prev.lName,
            email:prev.email
        };
      }

      else if(inputName==="lName")
        {
          return{
              fName:prev.fName,
              lName:inputValue,
              email:prev.email
          };
        }


        else if(inputName==="email")
          {
            return{
                fName:prev.fName,
                lName:prev.lName,
                email:inputValue
            };
          }

    })

    // CHATGPT METHOD

    const { name, value } = e.target;
    setContact((prev) => ({
      ...prev,
      [name]: value // Dynamically updates the correct field
    }));

  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="First Name" 
        value={contact.fName} onChange={InputHandle} />
        <input name="lName" placeholder="Last Name" 
        value={contact.lName} onChange={InputHandle} />
        <input name="email" placeholder="Email"
         value={contact.email}onChange={InputHandle} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
