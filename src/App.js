import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Main from './pages/Main'
import Search from './pages/Search'
import 'antd/dist/antd.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  )
}

export default App
