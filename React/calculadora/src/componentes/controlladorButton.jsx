import React from "react"

export function Buttons(props){
    return(
        <button className="numbers" onClick={() => props.saveNumb(props.children)}>{props.children}</button>
    )
}