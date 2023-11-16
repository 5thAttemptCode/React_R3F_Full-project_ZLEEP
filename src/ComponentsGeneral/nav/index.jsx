import React from 'react'
import "./style.css"
import { Link, NavLink } from "react-router-dom"


export default function Nav() {
  return (
    <nav>
        <Link className='logo' to="/" >ZLEEP</Link>
        <div>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/checkout">SUBSCRÌBE</NavLink>
        </div>
    </nav>
  )
}
