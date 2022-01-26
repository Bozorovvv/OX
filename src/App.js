import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { url } from "./api";
import { Row } from "antd";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Search from "./pages/Search";

function App() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      fetch(`${url}/variations`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then((response) => response.json())
        .then((response) => setProducts(response.items))
        .catch((error) => console.log(error));
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage.getItem("token")]);

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="/products" element={<Products products={products} />} />
        <Route path="/search" element={<Search products={products} />} />
      </Routes>
    </Row>
  );
}

export default App;
