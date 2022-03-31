import react from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./components/Header";
const body = (props) => {
  <Container fluid style={{ color: "white" }}>
    <Row>
      <Header />
    </Row>
    <Row>
      <Col>
        <img src={logo} width="100%" height="80%" />
      </Col>
    </Row>
    <Row style={{ padding: 5, marginTop: 10 }}>
      <Col style={{ margin: 5 }}>
        <Product />
      </Col>
      <Col style={{ margin: 5 }}>
        <Product style={{ margin: 5 }} />
      </Col>
      <Col style={{ margin: 5 }}>
        <Product style={{ margin: 5 }} />
      </Col>
      <Col style={{ margin: 5 }}>
        <Product style={{ margin: 5 }} />
      </Col>
      <Col style={{ margin: 5 }}>
        <Product style={{ margin: 5 }} />
      </Col>
      <Col style={{ margin: 5 }}>
        <Product style={{ margin: 5 }} />
      </Col>
      <Col style={{ margin: 5 }}>
        <Product style={{ margin: 5 }} />
      </Col>
      <Col style={{ margin: 5 }}>
        <Product style={{ margin: 5 }} />
      </Col>
    </Row>
    <Row>
      <Col>{/* <loginModal /> */}</Col>
      HElo Woemd;
      <loginModal />
    </Row>

    {/* <Row>
        {//console.log(products)}
        
      </Row> */}
    {/* <img src="./data/images/milton_set.webp" /> */}
  </Container>;
};
export default Body;
