import phraseSheet from "./data/phraseSheet"
import PhrasesCard from "./components/PhrasesCard"
import React from "react"

export default function Phrases() {
    const phrase = phraseSheet.map(item => {
        return (
            <PhrasesCard
            key = {item.id}
            japanese = {item.phraseJP}
            english = {item.translation}
            />
        )
    })
    return (
        <div className = "phrase-block">
          {phrase}
        </div>
    )
}