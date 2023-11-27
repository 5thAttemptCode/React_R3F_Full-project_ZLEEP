import React from 'react'
import './style.css'

import { UserAuth } from '@/context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import CustomizedRating from '@/ComponentsGeneral/rating/index'


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
    <div className='account-wrapper section section-wrapper'>
      <div className="account-container">
        <div>
          <div className='content-box'>
            <p><span>Account email: </span>{user && user.email}</p>
            <br />
            <button onClick={handleLogout}>Logout</button>
          </div>   
          <br />
          <Link to="/">Check out ZLEEP</Link>
        </div>
        <CustomizedRating />
      </div>
    </div>
  )
}