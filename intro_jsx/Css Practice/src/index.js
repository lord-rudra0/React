//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom"


const current_time=new Date();
const hours=current_time.getHours();

let text;
let custom_style ={
    color:"black"
}

if (hours <12)
{
    text="Good Morning";
    custom_style.color="red";
    
}
else if (hours<18)
{
    text="Good Afternoon";
    custom_style.color="green";
}

else
{
     text="Good Evening";
     custom_style.color="blue";
}





ReactDOM.render(<h1 className="heading" style={custom_style}>{text}</h1>,document.getElementById("root"))



//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
