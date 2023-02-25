import React from "react"
export default function OsakaCard(props) {

    let toggleStyles = {
        display: "inline-block"
    }

    if(props.number === 1) {
        toggleStyles = {
            display: props.price === "" ? "inline-block" : "none"
        }
    }
    if(props.number === 2) {
        toggleStyles = {
            display: props.reservation === 1 ? "inline-block" : "none"
        }
    }

    return (
        <div className = "card" style = {toggleStyles}>
            <a href={props.link} target="_blank">
                <img className = "card-image" src={`https://BCDelta.github.io/Japan2023/images/${props.img}`}></img>
            </a>
            <hr />
            <div className = "additional-content">
                {props.price === "" ? <p>FREE</p> : <p>Price: {props.price}</p>}
                {props.reservation === 1 && <p>Reservation Required</p>}
            </div>
            <h1>{props.title}</h1>
            <h4>{props.description}</h4>
            {props.appointment == null ? <p></p> : <p>{props.appointment}</p>}
            <h6 className = "location">{props.location}</h6>
        </div>
    )
}