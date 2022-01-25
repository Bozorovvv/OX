import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Col, Row, Form, Input, Button } from 'antd'
// import clip from '../assets/products.mp4'

const Login = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const onFinish = (values) => {
    setLoading(true)
    fetch('https://toko.ox-sys.com/security/auth_check', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/x-www-form-urlencoded',
      },
      body: `_username=${values.username}&_password=${values.password}&_subdomain=${values.subdomain}`,
    })
      .then((response) => response.json())
      .then((response) => {
        localStorage.setItem('token', response.token)
        navigate('/main')
      })
      .catch((error) => console.log(error))
    setLoading(true)
  }

  return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <Col>
        {/* <video
          width="100%"
          autoPlay
          loop
          muted
          style={{
            height: '100vh',
            width: '100vw',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <source src={clip} type="video/mp4" />
        </video> */}

        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Company"
            name="subdomain"
            rules={[{ required: true, message: 'Please input your company!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button loading={loading} type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}

export default Login
