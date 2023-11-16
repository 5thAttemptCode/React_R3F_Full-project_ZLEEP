import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Experience from './Pages/experience/index'
import About from './Pages/about/index'
import Checkout from './Pages/checkout/index'
import Nav from './ComponentsGeneral/nav/index'


export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Experience />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  )
}
