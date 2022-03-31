import react from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const BusinessHome = (props) => {
  return (
    <Row
      style={{ marginTop: "50px", marginLeft: "170px", marginRight: "50px" }}
    >
      <h2 style={{ color: "grey" }}>
        Overview
        <Button style={{ float: "right" }}>Filter - Today</Button>
      </h2>

      <Col>
        <Card bg="light" expand="xs">
          <Card.Header>Total Sales</Card.Header>
          <Card.Body>
            <Card.Text style={{ marginTop: "30px" }}>
              <b>&#8377; 3,212,278</b>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card bg="light" expand="xs">
          <Card.Header>Orders</Card.Header>
          <Card.Body>
            <Card.Text style={{ marginTop: "30px" }}>
              <b>218,773</b>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card bg="light" expand="xs">
          <Card.Header>Highest Order</Card.Header>
          <Card.Body>
            <Card.Text style={{ marginTop: "30px" }}>
              <b>&#8377; 31,280</b>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card bg="light" expand="xs">
          <Card.Header>Store View</Card.Header>
          <Card.Body>
            <Card.Text style={{ marginTop: "30px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-eye-fill"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
              </svg>
              <b style={{ marginLeft: 10 }}> 428,278</b>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card bg="light" expand="xs">
          <Card.Header>Total Product View</Card.Header>
          <Card.Body>
            <Card.Text style={{ marginTop: "30px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-eye-fill"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
              </svg>
              <b style={{ marginLeft: 10 }}> 428,278</b>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
export default BusinessHome;
