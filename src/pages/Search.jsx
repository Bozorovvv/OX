import React, { useState, useEffect } from "react";
import { Layout, Col, Table, Input } from "antd";
import Navbar from "../components/Navbar";

const Search = ({ products }) => {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(
      products

        .filter(
          (el) => el.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        )
        .sort(
          (a, b) =>
            a.name.toLowerCase().indexOf(search.toLowerCase()) -
            b.name.toLowerCase().indexOf(search.toLowerCase())
        )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
  ];
  return (
    <Layout.Content style={{ padding: "50px" }}>
      <Col span={12} offset={6}>
        <Navbar isSearchpage={true} />
        <h1>Search page</h1>
        <Input
          placeholder="search..."
          style={{
            borderRadius: "10px",
            boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
            margin: "16px 0",
            height: "50px",
          }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Table
          style={{
            padding: "16px",
            borderRadius: "10px",
            boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
          }}
          rowKey={(record) => record.id}
          loading={products.length <= 0}
          columns={columns}
          dataSource={filteredProducts.length > 0 ? filteredProducts : products}
        />
      </Col>
    </Layout.Content>
  );
};

export default Search;
