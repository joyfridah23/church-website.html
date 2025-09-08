import { useState } from 'react'

import Home from './pages/Home'
import Location from './pages/Location'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Activities from './pages/Activities'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/events" element={<Activities />} />
      </Routes>

    </>
  )
}

export default App
