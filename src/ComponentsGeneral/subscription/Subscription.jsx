import React from 'react'
import "./subscriptions.css"
import BuyButton from '../buyButton/BuyButton'

export default function Subscription(props) {
  return (
    <div className="wrapper">
      <div className='subscriptions'>
        <div className='title'>
          <h1>{props.title}</h1>
          <h1>${props.price}</h1>
        </div>
        <div className="list">
          <li>{props.itemOne}</li>
          <li>{props.itemTwo}</li>
          <li>{props.itemThree}</li>
        </div>
        <p>{props.star}</p>
      </div>
      <BuyButton />
    </div>
  )
}
