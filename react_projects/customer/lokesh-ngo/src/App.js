import React, { Component } from "react";
import ImageCarasol from "./component/ImageCarasol";
import "./App.css";
import Header from "./component/Header.jsx";
import ImageCarousel from "./component/ImageCarousel.jsx";
import MenuBar from "./component/MenuBar";
import "bootstrap/dist/css/bootstrap.css";
import NewsFeed from "./component/NewsFeed";
import MenuContent from "./component/MenuContent";
import Footer from "./component/Footer";
import Carasole from "./component/Carasol";
// import logo from "./images/logo.png";
// import logo_1 from "../images/logo-2.png";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <ImageCarasol /> */}
        <div className="row">
          <div className="col-sm-2">
            <NewsFeed />
          </div>
          <div className="col-sm-10">
            <MenuBar />
            <MenuContent />
          </div>
          <div className="col-sm-12">
            <center>
              <Footer />
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
