import React from 'react'
import "./style.css"
import Subscription from '../../ComponentsGeneral/subscription/index'
import BuyButton from '../../ComponentsGeneral/buyButton'

export default function Checkout() {
  return (
    <div className='checkout section'>
      <div>
        <Subscription
          title="Single Purchase"
          price="45"
          itemOne="One bottle"
          itemTwo="One time purchase"
          itemThree="Paid delivery"
        />               
        <Subscription
          title="Subscribe and save"
          price="40"
          itemOne="One bottle e/ month"
          itemTwo="cancel anytime"
          itemThree="Zleep membership*"
          star="*Zleep membership includes FREE DELIVERY, weekly updates on scientific
          CBD news, exclusive and early access to upcoming products including a 10%
          discount, and a surprise gift once a year. "
          />
      </div>
      <BuyButton />
    </div>
  )
}
