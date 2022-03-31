import { Alert } from "bootstrap";
import React, { useState } from "react";
import {
  Form,
  Nav,
  Navbar,
  Row,
  Button,
  Badge,
  Modal,
  Col,
} from "react-bootstrap";
import "../css/Header.css";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase/firebase.config";

//const Dummy_data = require("../data/dummy_data.js");
const Header = (props) => {
  const [login_modal, setlogin_modal] = useState(false);
  const openlogin_modal = () => setlogin_modal(true);
  const closelogin_modall = () => setlogin_modal(false);
  const switchClicked = () => {
    console.log("EHekndj");
  };

  //True -> business
  //False -> Custimer
  const [user_type, setUserType] = useState(null);
  const setBuinessUserType = () => {
    setUserType(true);
  };
  const setCustomerUserType = () => {
    setUserType(false);
  };
  const setUserTypeHandler = (e) => {
    if (e.target.value == "on") {
      setUserType(true);
    } else {
      setUserType(false);
    }
    alert(e.target.value);
  };

  initializeApp(firebaseConfig);

  async function signIn() {
    // Sign in Firebase using popup auth and Google as the identity provider.
    try {
      var provider = new GoogleAuthProvider();
    } catch (error) {
      console.log("Error Raised", error);
    }
    await signInWithPopup(getAuth(), provider, (err) => {
      console.log("Error Raised", err);
    });
  }

  return (
    <>
      <Modal show={login_modal} onHide={closelogin_modall}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col style={{ alignItems: "center" }}>
                <Button onClick={setBuinessUserType} disabled={!user_type}>
                  Business
                </Button>
                <Button onClick={setCustomerUserType} disabled={user_type}>
                  Customer
                </Button>
                {user_type ? (
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Shore Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Store Name"
                    />
                    <Form.Label>Store Catgory</Form.Label>
                    <Form.Control type="" />
                  </Form.Group>
                ) : (
                  <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Shore Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Your Store Name"
                      />
                      <Form.Label>Store Catgory</Form.Label>
                      <Form.Control type="" />
                    </Form.Group>
                  </div>
                )}

                {/* {user_type ? <p>business</p> : <p>Customer</p>}
                <Form.Check
                  type="switch"
                  style={{ width: "60px", height: "10%" }}
                  onChange={setUserTypeHandler}
                ></Form.Check> */}
              </Col>
            </Row>
          </Form>
          {/* <Button onClick={setBusinessTypeUser} id="business-btn">
            Business
          </Button>
          <Button onClick={setCustomerTypeUser}>Customer</Button> */}
          {/* 
          <lable class="switch">
            <input
              type="checkbox"
              autoComplete="off"
              value={1}
              onChange={switchClicked}
            />
            <span class="slider"></span>
            <input type="checkbox" autoComplete="off" value={0} />
            <span class="slider"></span>
          </lable>
          <br /> */}
          <Button onClick={signIn}>
            <img
              src="https://img.icons8.com/color/16/000000/google-logo.png"
              alt="Googlr Login"
            />{" "}
            Signup Using Google
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closelogin_modall}>Close</Button>
        </Modal.Footer>
      </Modal>
      <Navbar bg="dark" expand="lg" sticky="top">
        <Navbar.Brand style={{ color: "white", padding: 10 }}>
          <b>Pesto Hiring Avail</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="hmain-bar"></Navbar.Toggle>
        <Navbar.Collapse id="main-bar">
          <Nav defaultActiveKey="/home" variant="tab" style={{ marginTop: 15 }}>
            <Nav.Item>
              <Button variant="dark" style={{ padding: 10 }}>
                <Row>Hello</Row>
                <Row>Select Your Address</Row>
              </Button>
            </Nav.Item>
            <Nav.Item style={{ width: 700, marginTop: 10, marginLeft: 20 }}>
              <Form variant="dark">
                <Form.Group controlId="search-item">
                  <Form.Control
                    size="mb"
                    type="text"
                    placeholder="What are you looking for??"
                  />
                </Form.Group>
              </Form>
            </Nav.Item>
            {/* <Nav.Item>
            <Button>Ind</Button>
          </Nav.Item> */}
            <Nav.Item style={{ marginTop: 10, marginLeft: 20 }}>
              <Button variant="dark" onClick={openlogin_modal}>
                Log-In/Sign-In
              </Button>
            </Nav.Item>
            <Nav.Item style={{ marginTop: 10, marginLeft: 20 }}>
              <span className=""></span>
              <Badge bg="primary">0</Badge>
              <Button variant="dark">Cart</Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Header;
