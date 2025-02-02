import React from "react";
// import emojipedia from "./emojipedia"

function Emoji(props)
{
    return (
        <div className="term">
          
              <div className="term">
                <dt>
                  <span className="emoji" role="img" aria-label="Tense Biceps">
                    {props.emoji}
                  </span>
                  <span>{props.name}</span>
                </dt>
               <dd>
                {props.meaning}
                </dd>
              </div>
           
        </div>
    );
}
export default Emoji;