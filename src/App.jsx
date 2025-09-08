import { useState } from 'react'

import Home from './pages/Home'
import Location from './pages/Location'
import { Route, Routes } from 'react-router-dom'
import Events from './pages/events'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/events" element={<Events />} />
      </Routes>

    </>
  )
}

export default App
