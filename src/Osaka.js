import React from 'react'
import OsakaData from './data/osakaData'
import OsakaCard from './components/OsakaCard'

export default function Tokyo() {
  const cards = OsakaData.map(item => {
    return (
      <OsakaCard
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