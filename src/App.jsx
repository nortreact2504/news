import { useState } from 'react'

import './App.css'
import Homepage from './Pages/Homepage'
import Layout from './Pages/Layout'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import NoPage from './Pages/NoPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="news" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
