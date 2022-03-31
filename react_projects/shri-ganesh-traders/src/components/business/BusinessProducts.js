import react from "react";
import { Accordion, Card, Col, Row } from "react-bootstrap";
import prod1 from "../../data/images/non_stick.jpg";
const BusinessProduct = (props) => {
  return (
    <div>
      <Card style="18 rem">
        <Card.Body>
          <Row>
            <Col>
              <img src={prod1} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};
export default BusinessProduct;
