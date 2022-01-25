import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Row, Col, Table } from 'antd'

function Main() {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      fetch('https://toko.ox-sys.com/variations', {
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

  console.log(products)
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      onFilter: (value, record) => record.name.indexOf(value) === 0,
    },

    {
      title: 'Пол',
      dataIndex: '',
      render: (record) => record.productProperties[0].value,
    },
    {
      title: 'Тип',
      dataIndex: '',
      render: (record) => record.productProperties[1].value,
    },
    {
      title: 'Торговая марка',
      dataIndex: '',
      render: (record) => record.productProperties[2].value,
    },
    {
      title: 'Размер',
      dataIndex: '',
      render: (record) => record.properties[0].value,
    },
    {
      title: 'Цвет',
      dataIndex: '',
      render: (record) => record.properties[1].value,
    },
    {
      title: 'Description',
      dataIndex: 'shortDescription',
    },
    {
      title: 'Price UZS',
      dataIndex: 'importRecord',
      render: (record) => record.stockSellPrice.UZS,
    },
  ]

  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra)
  }

  return (
    <Row>
      <Col>
        <Table columns={columns} dataSource={products} onChange={onChange} />
      </Col>
    </Row>
  )
}

export default Main
