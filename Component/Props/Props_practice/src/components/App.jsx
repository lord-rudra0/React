import React from "react";
import Card from "./Card"
import contacts from "../contacts"
import Avatar from "../Avatar";

function App() {
  return (
    <div>
    <Avatar imgs="https://programbusiness.com/wp-content/uploads/2022/05/rps_updated_logo.png"/>
    <h1 className="heading">My contacts</h1>
      <Card name={contacts[0].name} imgs={contacts[0].imgURL} ph={contacts[0].phone} email={contacts[0].email} />,
      <Card name={contacts[1].name} imgs={contacts[1].imgURL} ph={contacts[1].phone} email={contacts[1].email} />
      <Card name={contacts[2].name} imgs={contacts[2].imgURL} ph={contacts[2].phone} email={contacts[2].email} />
    </div>
  );
}

export default App;
