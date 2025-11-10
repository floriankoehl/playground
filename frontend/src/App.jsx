import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ApiExample from './pages/ApiExample.jsx'
import GraphCV from './pages/GraphCV.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <nav className="flex gap-4 p-4 bg-gray-200">
        <Link to="/">Home</Link>
        <Link to="/api-example">API Example</Link>
        <Link to="/cv-graph">CV Graph</Link>
      </nav>
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api-example" element={<ApiExample />} />
          <Route path="/cv-graph" element={<GraphCV />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
