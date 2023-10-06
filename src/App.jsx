import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Experience from './Pages/Experience'
import About from './Pages/About'
import Subscribe from './Pages/Subscribe'
import Nav from './ComponentsGeneral/nav/Nav'


export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Experience />} />
        <Route path="/about" element={<About />} />
        <Route path="/subscribe" element={<Subscribe />} />
      </Routes>
    </BrowserRouter>
  )
}
