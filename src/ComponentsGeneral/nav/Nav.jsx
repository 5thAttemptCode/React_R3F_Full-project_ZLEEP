import React from 'react'
import "./nav.css"
import { Link, NavLink } from "react-router-dom"

export default function Nav() {
  return (
    <nav>
        <Link className='logo' to="/" >ZLEEP</Link>
        <div>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/subscribe">SUBSCRÌBE</NavLink>
        </div>
    </nav>
  )
}
