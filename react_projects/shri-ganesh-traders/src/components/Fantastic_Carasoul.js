import React from "react";
import { Carousel } from "react-bootstrap";

const Fantastic_Carasoul = (props) => {
  return (
    <Carousel variant="dark">
      <Carousel.Item interval={1200}>
        <img
          className="d-block w-100"
          src="../data/images/devidayal_set.jpg"
          alt="Non- stick Cookware"
        />
        {/* <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={1200}>
        <img
          className="d-block w-100"
          src="../data/images/milton_set.webp"
          alt="Non- stick Cookware"
        />
      </Carousel.Item>
      <Carousel.Item interval={1200}>
        <img
          className="d-block w-100"
          src="../data/images/non_stick.webp"
          alt="Non- stick Cookware"
        />
      </Carousel.Item>
    </Carousel>
  );
};
export default Fantastic_Carasoul;
