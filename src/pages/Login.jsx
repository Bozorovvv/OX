import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Input, Button, Card } from 'antd'
import { url } from '../api'

const Login = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const onFinish = (values) => {
    setLoading(true)
    fetch(`${url}/security/auth_check`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/x-www-form-urlencoded',
      },
      body: `_username=${values.username}&_password=${values.password}&_subdomain=${values.subdomain}`,
    })
      .then((response) => response.json())
      .then((response) => {
        localStorage.setItem('token', response.token)
        navigate('/products')
      })
      .catch((error) => console.log(error))
    setLoading(true)
  }

  return (
    <Card
      style={{
        borderRadius: '10px',
        boxShadow: '5px 8px 24px 5px rgba(208, 216, 243, 0.6)',
      }}
    >
      <h2
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '16px 0',
          fontWeight: '700',
        }}
      >
        OX-SYSTEM
      </h2>
      <Form style={{ width: '300px' }} onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="user name" />
        </Form.Item>
        <Form.Item
          name="subdomain"
          rules={[{ required: true, message: 'Please input your company!' }]}
        >
          <Input placeholder="company" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="password" />
        </Form.Item>

        <Form.Item>
          <Button
            style={{ width: '100%' }}
            loading={loading}
            type="primary"
            htmlType="submit"
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default Login
