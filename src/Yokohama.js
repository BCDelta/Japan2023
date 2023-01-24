import React from 'react'
import YokohamaData from './data/yokohamaData'
import YokohamaCard from './components/YokohamaCard'

export default function Tokyo() {
  const cards = YokohamaData.map(item => {
    return (
      <YokohamaCard
        key = {item.id} 
        title = {item.title}
        description = {item.description}
        img = {item.thumbnail}
        location = {item.location}
        price = {item.price}
        reservation = {item.reservation}
      />
    )
  })
    return (
        <div className = "things-to-do">
          {cards}
        </div>
    )
}