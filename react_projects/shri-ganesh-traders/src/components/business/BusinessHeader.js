import react from "react";
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
const BusinessHeader = (props) => {
  return (
    <Row>
      <Navbar bg="dark" expand="lg" sticky="top" variant="pills">
        <Navbar.Brand style={{ color: "white", padding: 10 }}>
          <b>Hi ! Store Name</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="hmain-bar"></Navbar.Toggle>
        <Navbar.Collapse id="main-bar">
          <Nav defaultActiveKey="/home" variant="tab" style={{ padding: 10 }}>
            <Nav.Item>
              <Button variant="dark" style={{ padding: 10 }}>
                Home
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button variant="dark" style={{ padding: 10 }}>
                Orders
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button variant="dark" style={{ padding: 10 }}>
                Products
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button variant="dark" style={{ padding: 10 }}>
                Manage
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button variant="dark" style={{ padding: 10 }}>
                My Store
              </Button>
            </Nav.Item>
            <Nav.Item
              style={{
                width: 500,
                marginTop: 10,
                marginLeft: 30,
                marginRight: 30,
              }}
            >
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
            <Navbar.Brand
              style={{
                color: "white",
                padding: 10,
                alignSelf: "baseline",
                alignContent: "flex-end",
              }}
            >
              <b>Local Shoppers</b>
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Row>
  );
};
export default BusinessHeader;
