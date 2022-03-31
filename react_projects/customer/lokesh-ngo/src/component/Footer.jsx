import React, { Component } from "react";
import "../style/Footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <div className="footer-content">
          copyright <span>&copy;</span>
          <span className="footer-text">
            commodo quis imperdiet massa tincidunt sem viverra
          </span>
        </div>
      </div>
    );
  }
}

export default Footer;
