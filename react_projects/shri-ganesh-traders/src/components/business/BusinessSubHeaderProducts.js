import react from "react";
import { Badge, Nav, Navbar, Row } from "react-bootstrap";

const BusinessSubHeaderProducts = (props) => {
  return (
    <Row>
      <Navbar bg="light">
        <Navbar.Collapse>
          <Nav variant="pills">
            <Nav.Item style={{ marginLeft: "200px" }}>
              <Badge
                bg="info"
                style={{
                  borderRadius: "10px",
                  padding: 10,
                  marign: 50,
                  width: "450px",
                }}
              >
                Product
              </Badge>
            </Nav.Item>
            <Nav.Item style={{ marginLeft: "200px" }}>
              <Badge
                bg="info"
                style={{
                  borderRadius: "10px",
                  padding: 10,
                  marign: 10,
                  width: "450px",
                }}
              >
                Category
              </Badge>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Row>
  );
};
export default BusinessSubHeaderProducts;
