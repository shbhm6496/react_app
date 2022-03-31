import React, { Component } from "react";
import logo from "../images/logo.png";
import logo_1 from "../images/logo2.png";
import "bootstrap/dist/css/bootstrap.css";

class ImageCarasol extends Component {
  render() {
    return (
      // <div
      //   id="carasoleSlideOnly"
      //   className="carousel slide"
      //   data-ride="carousel"
      // >
      //   <div className="carousel-inner">
      //     <div className="carousel-item active">
      //       <img src={logo} alt="First Slide" className="d-block w-100" />
      //     </div>
      //     <div className="carousel-item">
      //       <img src={logo_1} alt="Second Slide" className="d-block w-100" />
      //     </div>
      //     <div className="carousel-item">
      //       <img src={logo} alt="Third Slide" className="d-block w-100" />
      //     </div>
      //   </div>
      // </div>

      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="../images/logo.png"
              className="d-block w-100"
              alt="First"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./images/logo2.png"
              className="d-block w-100"
              alt="Second"
            />
          </div>
          <div className="carousel-item">
            <img
              src="../images/logo.png"
              className="d-block w-100"
              alt="Third"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default ImageCarasol;
