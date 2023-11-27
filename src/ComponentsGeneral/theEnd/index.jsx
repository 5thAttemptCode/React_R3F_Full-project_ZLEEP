import React from 'react'
import './style.css'

import { ArrowUpRight } from 'phosphor-react'


export default function TheEnd({ navigate }) {
  return (
    <div className='the-end'>
      <div>
        <p>Ok that's it, time to</p>
        <br />
        <h1 onClick={() => navigate("/checkout")}>GO TO  <br /> ZLEEP<ArrowUpRight /></h1>
      </div>
    </div>
  )
}
