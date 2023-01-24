import React from 'react'
import SaitamaData from './data/saitamaData'
import SaitamaCard from './components/SaitamaCard'

export default function Tokyo() {
  const cards = SaitamaData.map(item => {
    return (
      <SaitamaCard
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