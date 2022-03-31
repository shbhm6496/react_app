import react from "react";
import { Badge, Nav, Navbar } from "react-bootstrap";
const BusinessSubHeaderOrder = (props) => {
  return (
    <div>
      <Navbar bg="light">
        <Navbar.Collapse>
          <Nav variant="pills">
            <Nav.Item style={{ marginLeft: "200px" }}>
              <Badge
                bg="info"
                style={{
                  borderRadius: "10px",
                  padding: 10,
                  marign: 10,
                  width: "100px",
                }}
              >
                All
              </Badge>
            </Nav.Item>
            <Nav.Item style={{ marginLeft: "20px" }}>
              <Badge
                bg="info"
                style={{
                  borderRadius: "10px",
                  padding: 10,
                  marign: 10,
                  width: "100px",
                }}
              >
                Pending
              </Badge>
            </Nav.Item>
            <Nav.Item style={{ marginLeft: "20px" }}>
              <Badge
                bg="info"
                style={{
                  borderRadius: "10px",
                  padding: 10,
                  marign: 10,
                  width: "100px",
                }}
              >
                Accepted
              </Badge>
            </Nav.Item>
            <Nav.Item style={{ marginLeft: "20px" }}>
              <Badge
                bg="info"
                style={{
                  borderRadius: "10px",
                  padding: 10,
                  marign: 10,
                  width: "100px",
                }}
              >
                Shipped
              </Badge>
            </Nav.Item>
            <Nav.Item style={{ marginLeft: "20px" }}>
              <Badge
                bg="info"
                style={{
                  borderRadius: "10px",
                  padding: 10,
                  marign: 10,
                  width: "100px",
                }}
              >
                Delivered
              </Badge>
            </Nav.Item>
            <Nav.Item style={{ marginLeft: "20px" }}>
              <Badge
                bg="info"
                style={{
                  borderRadius: "10px",
                  padding: 10,
                  marign: 10,
                  width: "100px",
                }}
              >
                Modified
              </Badge>
            </Nav.Item>
            <Nav.Item style={{ marginLeft: "20px" }}>
              <Badge
                bg="info"
                style={{
                  borderRadius: "10px",
                  padding: 10,
                  marign: 10,
                  width: "100px",
                }}
              >
                Rejected
              </Badge>
            </Nav.Item>
            <Nav.Item style={{ marginLeft: "20px" }}>
              <Badge
                bg="info"
                style={{
                  borderRadius: "10px",
                  padding: 10,
                  marign: 30,
                  width: "100px",
                }}
              >
                Cancelled
              </Badge>
            </Nav.Item>
            <Nav.Item style={{ marginLeft: "20px" }}>
              <Badge
                bg="info"
                style={{
                  borderRadius: "10px",
                  padding: 10,
                  marign: 10,
                  width: "100px",
                }}
              >
                Failed
              </Badge>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default BusinessSubHeaderOrder;
