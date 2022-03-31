import React, { Component } from "react";
//import logo from "../images/logo.png";
import logo2 from "../images/Poverty_2.png";
import logo from "../images/Trafficking.png";
import logo1 from "../images/Extremism_2.jpeg";
import "../style/Carasol.css";

class Carasole extends Component {
  state = {
    image: [logo, logo1, logo2],
    currentImage: null,
  };
  getNextImage = () => {
    let index = this.state.image.indexOf(this.state.currentImage);
    index = index++ % 3;
    console.log(index);
    this.setState({ currentImage: this.state.image[index++ % 3] });
  };
  getPrevImage = () => {
    let index = this.state.image.indexOf(this.state.currentImage);
    index = index-- % 3;
    console.log(index);
    this.setState({ currentImage: this.state.image[index++ % 3] });
  };

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.getPrevImage}>
          Prev
        </button>
        <img src={logo} />
        <button className="btn btn-primary" onClick={this.getNextImage}>
          Next
        </button>
      </div>
    );
  }
}

export default Carasole;
