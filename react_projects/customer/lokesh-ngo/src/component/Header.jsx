import React, { Component } from "react";
import "../style/Header.css";
import ToolFreeNumber from "./TollFreeNumber";
import logo from "../images/logo.png";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header-box">
        <img src={logo} alt="Logo" />
        <div className="ngo-name">National Organization For Poor Children</div>
        <div className="toll-free-number">
          <ToolFreeNumber />
        </div>
      </div>
    );
  }
}

export default Header;
