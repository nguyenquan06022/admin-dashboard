import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Card from "../components/Card";
import CustomerTable from "../components/CustomerTable";

function DashBoard() {
  return (
    <div className="p-3">
      <div className="d-flex gap-2">
        <img src="images/Squares four 1.png" alt="" />
        <p style={{ marginBottom: 0, fontWeight: "bold" }}>Overview</p>
      </div>
      <br />
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
      <br />
      <CustomerTable />
    </div>
  );
}

export default DashBoard;
