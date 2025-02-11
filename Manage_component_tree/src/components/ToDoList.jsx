import React from "react";

function ToDoList(props) {




    return (<div
        onClick={
            (() => props.onChecked(props.id))
        }>
        <li>{props.text}

        </li>
    </div>)
}

export default ToDoList;



























// import React, { useState } from "react";

// function ToDoList(props) {
//     const [isDone, setIsDone] = useState(false)

//     function handleChange() {
//         setIsDone((prev) => {
//             return !prev
//         })
//     }

//     return (<div onClick={handleChange}>
//         <li style={{ textDecoration: isDone ? "line-through" : "none" }} >{props.text}</li>
//     </div>)
// }

// export default ToDoList;