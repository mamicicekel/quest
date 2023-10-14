import React from 'react'
import './InfoCard.css'
import Cat from '../../../assets/images/cats.jpg'
import Button from '../../Button/Button'

export default function InfoCard() {
  return (
    <div className='info-card-box'>
      <img src={Cat} />
      <h4>1. Lorem Ipsum</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
      <Button className='button three' text='Button' />
    </div>
  )
}
