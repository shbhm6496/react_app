import react, { useState } from "react";
import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import reactDom from "react-dom";
import Header from "./Header.js";
const LoginSignUp = (props) => {
  return (
    <Row>
      <Col></Col>
      <Col style={{ marginTop: 20 }}>
        <Card
          style={{
            width: "28rem",
            color: "white",
            height: "27rem",
            borderRadius: "20px",
          }}
          bg="dark"
          border="dark"
        >
          <br />
          <Card.Title style={{ margin: "10px", marginLeft: "30px" }}>
            <h2>Login/Sign-Up</h2>
          </Card.Title>
          <Card.Body style={{ padding: "10px" }}>
            <Form>
              <Form.Group style={{ margin: "10px" }}>
                <Form.Label>Store Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Store Name" />
              </Form.Group>
              <Form.Group style={{ margin: "10px" }}>
                <Form.Label>Store Name</Form.Label>
                <Form.Select aria-label="Select Your Store Category">
                  <option value="#" selected>
                    Select Your Store Category
                  </option>
                  <option value="Home">Home</option>
                  <option value="Home">Home</option>
                  <option value="Home">Home</option>
                  <option value="Home">Home</option>
                </Form.Select>
              </Form.Group>
              <Button
                variant="primary"
                style={{
                  marginTop: "10px",
                  marginLeft: "75%",
                }}
              >
                Register
              </Button>
              <div style={{ color: "grey", margin: "10px" }}>
                ------------------------------------------------------------------------------------
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
      <Col></Col>
    </Row>
  );
};
export default LoginSignUp;
