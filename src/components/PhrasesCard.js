import React from "react"
export default function PhrasesCard(props) {
    return (
        <div className = "phrase-card">
            <h6>Japanese</h6>
            <h4 className = "japanese">{props.japanese}</h4>
            <h6>English</h6>
            <h4 className = "english">{props.english}</h4>
        </div>
    )
}