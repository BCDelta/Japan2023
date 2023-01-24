import React from "react"
export default function PhrasesCard(props) {
    return (
        <div className = "phrase-card">
            <h6>Japanese</h6>
            <h3>{props.japanese}</h3>
            <h6>English</h6>
            <h4>{props.english}</h4>
        </div>
    )
}