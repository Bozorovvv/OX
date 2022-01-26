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
  }, [search]);

  console.log(filteredProducts);
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
        <Input onChange={(e) => setSearch(e.target.value)} />
        <Table
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
