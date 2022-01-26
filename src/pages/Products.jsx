import React from "react";
import { Layout, Col, Table } from "antd";
import Navbar from "../components/Navbar";

function Products({ products }) {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      onFilter: (value, record) => record.name.indexOf(value) === 0,
    },

    {
      title: "Пол",
      dataIndex: "",
      render: (record) => record.productProperties[0].value,
    },
    {
      title: "Тип",
      dataIndex: "",
      render: (record) => record.productProperties[1].value,
    },
    {
      title: "Торговая марка",
      dataIndex: "",
      render: (record) => record.productProperties[2].value,
    },
    {
      title: "Размер",
      dataIndex: "",
      render: (record) => record.properties[0].value,
    },
    {
      title: "Цвет",
      dataIndex: "",
      render: (record) => record.properties[1].value,
    },
    {
      title: "Description",
      dataIndex: "shortDescription",
    },
    {
      title: "Price UZS",
      dataIndex: "importRecord",
      render: (record) => record.stockSellPrice.UZS,
    },
  ];

  return (
    <Layout.Content style={{ padding: "50px", height: "100vh" }}>
      <Col span={12} offset={6}>
        <Navbar />
        <h1>Products page</h1>
        <Table
          style={{
            borderRadius: "10px",
            boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
          }}
          loading={products.length <= 0}
          columns={columns}
          dataSource={products}
          rowKey={(record) => record.id}
        />
      </Col>
    </Layout.Content>
  );
}

export default Products;
