import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Experience from './Pages/experience/index'
import About from './Pages/about/index'
import Checkout from './Pages/checkout/index'
import Nav from './ComponentsGeneral/nav/index'
import Login from './Pages/user/Login'
import SignUp from './Pages/user/SignUp'
import { AuthContextProvider } from './context/AuthContext'
import Account from './Pages/account'
import ProtectedRoute from './utils/ProtectedRoute'


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
