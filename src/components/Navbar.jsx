import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { SwapLeftOutlined, SwapRightOutlined } from '@ant-design/icons'
import { Col, Row, Button } from 'antd'

const Navbar = () => {
  const pageLocation = useLocation()
  const navigate = useNavigate()

  return (
    <Row justify="space-between" style={{ marginBottom: '16px' }}>
      <Col>
        <Button
          type="link"
          onClick={() =>
            pageLocation.pathname !== '/products'
              ? navigate('/products')
              : navigate('/login')
          }
        >
          <SwapLeftOutlined />
          Back
        </Button>
      </Col>
      {pageLocation.pathname === '/products' && (
        <Col>
          <Button type="link" onClick={() => navigate('/search')}>
            Search page
            <SwapRightOutlined />
          </Button>
        </Col>
      )}
    </Row>
  )
}

export default Navbar
