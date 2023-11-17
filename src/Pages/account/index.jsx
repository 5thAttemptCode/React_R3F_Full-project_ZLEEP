import React from 'react'
import './style.css'

import { UserAuth } from '../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'


export default function Account() {
  
  const { user, logout } = UserAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
      try {
          await logout()
          navigate("/")
      } catch (e) {
          console.log(e.message)
      }
  }

  return (
    <div className='account-wrapper'>
      <div className="account-container">
        <p><span>Account email: </span>{user && user.email}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <Link to="/">Check out ZLEEP</Link>
    </div>
  )
}