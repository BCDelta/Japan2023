import React from 'react'
import TokyoData from './data/tokyoData'
import TokyoCard from './components/TokyoCard'

export default function Tokyo() {
  const cards = TokyoData.map(item => {
    return (
      <TokyoCard 
        title = {item.title}
        description = {item.description}
        img = {item.thumbnail}
        location = {item.location}
      />
    )
  })
    return (
        <div className = "things-to-do">
          {cards}
        </div>
    )
}