import React from "react";

function Card(props){
    return (<div>
        <h2>{props.name}</h2>
        <img src={props.img} alt="IMAGE"/>
        <p>{props.ph}</p>
        <p>{props.email}</p>
    </div>)
}


export default Card;