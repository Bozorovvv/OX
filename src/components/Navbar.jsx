import React from "react";
import { Col, Row, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { SwapLeftOutlined, SwapRightOutlined } from "@ant-design/icons";

const Navbar = ({ isSearchpage }) => {
  const navigate = useNavigate();
  return (
    <Row justify="space-between" style={{ marginBottom: "16px" }}>
      <Col>
        <Button
          type="link"
          onClick={() =>
            isSearchpage ? navigate("/products") : navigate("/login")
          }
        >
          <SwapLeftOutlined />
          Back
        </Button>
      </Col>
      {!isSearchpage && (
        <Col>
          <Button type="link" onClick={() => navigate("/search")}>
            Search page
            <SwapRightOutlined />
          </Button>
        </Col>
      )}
    </Row>
  );
};

export default Navbar;
