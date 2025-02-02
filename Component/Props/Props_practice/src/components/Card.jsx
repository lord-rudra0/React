import React from "react";
import Avatar from "../Avatar";
import Details from "../Details";

function Card(props){
    return (
  
     <div className="card">
        <div className="top">
            <h2 className="name">{props.name}</h2>
            <Avatar imgs={props.imgs}/>
            </div>
            <div className="bottom">
            <Details DetailsInfo={props.ph} />
            <Details DetailsInfo={props.email} />
            </div>
        
    
   </div>);
}


export default Card;