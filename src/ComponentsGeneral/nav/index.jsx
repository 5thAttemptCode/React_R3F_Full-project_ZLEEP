import React from 'react'
import "./style.css"

import { Link, NavLink } from "react-router-dom"
import { User } from 'phosphor-react'


export default function Nav() {
  return (
    <nav>
        <Link className='logo' to="/" >ZLEEP</Link>
        <div>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/checkout">SHOP</NavLink>
            <Link to="/account"><User size={25} /></Link>
        </div>
    </nav>
  )
}
