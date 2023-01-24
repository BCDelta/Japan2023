import React from 'react'
import KyotoData from './data/kyotoData'
import KyotoCard from './components/KyotoCard'

export default function Tokyo() {
  const cards = KyotoData.map(item => {
    return (
      <KyotoCard
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