import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { url } from './api'
import { Row } from 'antd'
import Login from './pages/Login'
import Products from './pages/Products'
import Search from './pages/Search'

function App() {
  const token = localStorage.getItem('token')
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      fetch(`${url}/variations`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
        .then((response) => response.json())
        .then((response) => setProducts(response.items))
        .catch((error) => console.log(error))
    } else {
      navigate('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage.getItem('token')])

  return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route
          path="/products"
          element={
            token ? <Products products={products} /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/search"
          element={
            token ? <Search products={products} /> : <Navigate to="/login" />
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Row>
  )
}

export default App
