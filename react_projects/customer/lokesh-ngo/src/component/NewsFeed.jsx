import React, { Component } from "react";

class NewsFeed extends Component {
  state = {};
  render() {
    return (
      <div className="news-feed">
        <marquee direction="up" scrollamount="5" behaviour="sliding">
          <ul className="list-group">
            <li className="list-group-item">News Feed</li>
            <li className="list-group-item list-group-item-primary">
              LOREM IPSUM
            </li>
            <li className="list-group-item list-group-item-primary">
              TRUMP IPSUM
            </li>
            <li className="list-group-item list-group-item-primary">
              HODOR IPSUM
            </li>
            <li className="list-group-item list-group-item-primary">
              HIPSTER IPSUM
            </li>
            <li className="list-group-item list-group-item-primary">
              ZOMBIE IPSUM
            </li>
            <li className="list-group-item list-group-item-primary">
              BACON IPSUM
            </li>
          </ul>
        </marquee>
      </div>
    );
  }
}

export default NewsFeed;
