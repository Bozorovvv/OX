import React, { useEffect, useState } from 'react'

function App() {
  const [token, setToken] = useState('')
  const [products, setProducts] = useState([])

  const body = {
    username: 'user_task',
    password: 'user_task',
    subdomain: 'toko',
  }
  useEffect(() => {
    fetch('https://toko.ox-sys.com/security/auth_check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `_username=${body.username}&_password=${body.password}&_subdomain=${body.subdomain}`,
    })
      .then((response) => response.json())
      .then((response) => setToken(response.token))
      .catch((error) => console.log(error))
  }, [])

  useEffect(() => {
    if (token) {
      fetch('https://toko.ox-sys.com/variations', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
        .then((response) => response.json())
        .then((response) => setProducts(response))
        .catch((error) => console.log(error))
    }
  }, [token])

  console.log(products)

  return <div className="App">Main</div>
}

export default App
