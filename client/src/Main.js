import React, { Component } from "react";
import "./cnecentral-universal.css";
import "antd/dist/antd.css";

import homeTri1 from "./imgs/homeTri1.jpg";
import homeTri2 from "./imgs/homeTri2.jpg";
import homeTri3 from "./imgs/homeTri3.jpg";

class Main extends Component {
  render() {
    return (
      <div className="contentEntry">
        <p className="subcontent">
          <img src={homeTri1} width="100%" alt="contentImage" />
          <p className="subcontenttext">
            <h4>Star Panic: Richi Chapter 1</h4>
            Making its premier at Detroit's Motor City Comic Con May 17th
            through May 19th.
            <a href="coming-soon.html">Visit Star Panic's Page</a>
          </p>
        </p>

        <p className="subcontent">
          <img src={homeTri2} width="100%" alt="contentImage" />
          <p className="subcontenttext">
            <h4>Rize Requia</h4>
            Showcased in Able Ideaz Manga Minion's Spirit Star Series
            <a href="http://ableideaz.com/comics/spirit-star/issue-3.php">
              Check Out the Latest
            </a>
          </p>
        </p>

        <p className="subcontent">
          <img src={homeTri3} width="100%" alt="contentImage" />
          <p className="subcontenttext">
            <h4>New Things From CNE</h4>
            Follow our social media to keep up with upcoming projects and
            events!
            <a href="connect.html">Connect With Us!</a>
          </p>
        </p>
      </div>
    );
  }
}

export default Main;
