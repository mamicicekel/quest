import React from 'react'
import './CountCard.css'
import Button from '../../Button/Button'

export default function CountCard({text}) {
  return (
    <div className='count-card-box'>
      <h1>{text}</h1>
      <span>Lorem Ipsum</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
    </div>
  )
}
