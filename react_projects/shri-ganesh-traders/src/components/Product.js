import React from "react";
import { Card, Button, Row, Col, Badge } from "react-bootstrap";
import logo from "../data/images/devidayal_set.jpg";

const Product = (props) => {
  return (
    <Card style={{ width: "18rem", color: "black" }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>Product 1</Card.Title>
        <Card.Text>Product Description </Card.Text>
        <Row>
          <Col>
            <Badge bg="warning" text="dark">
              772
            </Badge>
          </Col>
          <Col></Col>
          <Col>
            <Button variant="outline-primary">Buy</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
export default Product;
