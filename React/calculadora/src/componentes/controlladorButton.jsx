import React from "react"

export function Buttons(props){
    return(
        <button className="numbers-button" onClick={() => props.saveNumb(props.children)}>{props.children}</button>
    )
}