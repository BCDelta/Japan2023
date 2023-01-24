import React from 'react'
import HokkaidoData from './data/hokkaidoData'
import HokkaidoCard from './components/HokkaidoCard'

export default function Hokkaido() {
  const cards = HokkaidoData.map(item => {
    return (
      <HokkaidoCard
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