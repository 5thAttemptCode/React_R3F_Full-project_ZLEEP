import React, { useState } from 'react'
import './style.css'

import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '@/context/AuthContext'
import SignUp from './SignUp'


export default function Login() {
  
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ error, setError ] = useState("")
  const { signIn } = UserAuth()
  const navigate = useNavigate()

  const defaultEmail = "henry@mail.com"
  const defaultPassword = "henry1234"

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try{
      await signIn(email, password)
      navigate("/account")
    } catch (e) {
      setError(e.message)
      console.log(e.message);
    }
  }

  const handleDemo = (e) => {
    if(e.target.checked) {
      setEmail(defaultEmail)
      setPassword(defaultPassword)
    } else {
      setEmail("")
      setPassword("")
    }
  }
  
  //role="group" line 66: //Accessible Rich Internet Applications (ARIA). Important to give permission to use this credentials
                       
  return (
    <div className='form-wrapper section section-wrapper'>
      <div className="form-container login content-box">
        <h2>Login to your account</h2>
        <form onSubmit={handleSubmit}>
          <div role="group"> 
            <div className="demo">
              <input 
                onChange={handleDemo} 
                type="checkbox" 
                id="defaultUserCheck" 
                name="defaultUserCheck"
              />
              <label htmlFor="defaultUserCheck">use Demo account</label>
            </div>
            <label>Enter your email</label>
            <input 
              onChange={(e) => setEmail(e.target.value)} 
              value={email}
              type="text" 
              placeholder='email' />
          </div>
          <div role="group">
            <label>Enter your password</label>
            <input 
              onChange={(e) => setPassword(e.target.value)} 
              value={password}
              type="password" 
              placeholder='password' />
          </div>
          <button>Login</button>
        </form>
        <p>Don't have an account yet? Click <Link className='underline' to="/signup" element={<SignUp />}>here</Link></p>
      </div>
    </div>
  )
}