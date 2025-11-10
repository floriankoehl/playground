import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ApiExample from './pages/ApiExample.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <nav className="absolute flex gap-4 p-4 bg-gray-200">
        <Link to="/">Home</Link>
        <Link to="/api-example">API Example</Link>
      </nav>

      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api-example" element={<ApiExample />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
