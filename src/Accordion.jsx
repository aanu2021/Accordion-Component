import React, { useState } from "react";

const Accordion = (props)=> {

    const [state,setState] = useState(false);
    const [icon,setIcon] = useState("➕");

    const onClicks = ()=> {
        if(icon === "➕"){
            setIcon("➖");
        }
        else{
           setIcon("➕"); 
        }
        setState(!state);
    }

    return (<>
        <div className="main-heading">
           <p onClick={onClicks}>{icon}</p>
           <h3>{props.question}</h3>
        </div>
        <br/>
        <h4 className="answers" style={{display : state ? "block" : "none"}}>{props.answer}</h4>
    </>);
}

export default Accordion;