import React, { useState, useEffect, useRef } from 'react'
import "./style.css"

import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Subscription from '../../ComponentsGeneral/subscription/index'
import { Link } from 'react-router-dom'


export default function Checkout() {

  const [selectedSubscription, setSelectedSubscription] = useState('')
  const [user, setUser] = useState(null)
  const paypalButtonRendered = useRef(false)

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    })
  }, [])

  
   // PayPal button render useEffect 
   useEffect(() => {
    if (!user || paypalButtonRendered.current) return; 

    const paypalButtonContainer = document.getElementById('paypal-button-container');
    if (window.paypal) {
        paypalButtonRendered.current = true;
        window.paypal.Buttons({
            // your button configuration here
        }).render(paypalButtonContainer);
    } else {
        console.log('window.paypal is undefined. Make sure the PayPal script has been loaded')
    }
  }, [user]) // Depend on 'user' to ensure the button renders after user login 

  return (
    <div className='checkout section'>
      <h3>THE ULTIMATE <br /> SLEEP SOLUTION</h3>
      <div>
        <Subscription
          title="Single Purchase"
          price="45"
          setSelected={setSelectedSubscription}
          itemOne="One bottle"
          itemTwo="One time purchase"
          itemThree="Paid delivery"
        />
        <Subscription
          title="Subscribe and save"
          price="40"
          setSelected={setSelectedSubscription}
          itemOne="One bottle e/ month"
          itemTwo="cancel anytime"
          itemThree="Zleep membership*"
          asterix="*Zleep membership includes FREE DELIVERY, weekly updates on scientific 
          CBD news, exclusive and early access to upcoming products including a 10%
          discount, and a surprise gift once a year."
        />
      </div>
      {user ? <div id="paypal-button-container"></div> : <p>Please <Link to="/login">LOGIN HERE</Link> to buy</p>}
    </div>
  )
}