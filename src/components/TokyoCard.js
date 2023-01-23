import React from "react"
export default function TokyoCard(props) {
    return (
        <div className = "card">
            <img className = "card-image" src={`../images/${props.img}`}></img>
            <h1>{props.title}</h1>
            <h4>{props.description}</h4>
            <h6 className = "location">{props.location}</h6>
        </div>
    )
}