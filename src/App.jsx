import React from 'react'

import { AuthContextProvider } from './context/AuthContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Pages/about/index'
import Account from './Pages/account'
import Checkout from './Pages/checkout/index'
import Experience from './Pages/experience/index'
import Login from './Pages/user/Login'
import Nav from './ComponentsGeneral/nav/index'
import ProtectedRoute from './utils/ProtectedRoute'
import SignUp from './Pages/user/SignUp'


export default function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Experience />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}
