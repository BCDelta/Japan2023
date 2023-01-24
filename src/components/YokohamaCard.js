import React from "react"
export default function YokohamaCard(props) {
    return (
        <div className = "card">
            <img className = "card-image" src={`https://BCDelta.github.io/Japan2023/images/${props.img}`}></img>
            <hr />
            <div className = "additional-content">
                {props.price === "" ? <p>FREE</p> : <p>{props.price}</p>}
                {props.reservation === 1 && <p>Reservation Required</p>}
            </div>
            <h1>{props.title}</h1>
            <h4>{props.description}</h4>
            <h6 className = "location">{props.location}</h6>
        </div>
    )
}