import React, { useState } from 'react'
import "./style.css"


export default function Subscription(props) {

  const [selected, setSelected] = useState('');

  return (
    <div className="wrapper">
      <div className='subscriptions content-box'>
        <div className='title'>
          <h2>{props.title}</h2>
          <h4>${props.price}</h4>
        </div>
        <div className="list">
          <li>{props.itemOne}</li>
          <li>{props.itemTwo}</li>
          <li>{props.itemThree}</li>
        </div>
        <p className='asterix'>{props.asterix}</p>
        <div>
          <input type="radio" name="subscription" value={props.title} 
                onChange={e => setSelected(e.target.value)}
                aria-label={`Select ${props.title} subscription`} />
          <label htmlFor={props.title}> {props.title}</label>
        </div>
      </div>
    </div>
  )
}
