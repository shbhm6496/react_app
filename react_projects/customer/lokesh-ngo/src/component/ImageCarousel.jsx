import React, { Component } from "react";

class ImageCarousel extends Component {
  state = {};
  render() {
    return (
      <div
        className="carousel slide"
        data-bs-ride="carousel"
        id="carouselExample"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="1"
            className="active"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="2"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="3"
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img rc="../images/logo-2.png" className="d-block w-100" alt="G1" />
          </div>
          <div className="carousel-item">
            <img rc="../images/logo-2.png" className="d-block w-100" alt="G2" />
          </div>
          <div className="carousel-item">
            <img rc="../images/logo-2.png" className="d-block w-100" alt="G3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}

export default ImageCarousel;
