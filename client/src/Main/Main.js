import React, { Component } from "react";
import "./Main.css";
import "antd/dist/antd.css";
// import App from "./App";

class Main extends Component {
  render() {
    return (
      <div className="contentEntry">
        <div className="subcontent">
          {/* <img src={homeTri1} width="100%" alt="contentImage" /> */}
          <div className="subcontenttext">
            <h4>Star Panic: Richi Chapter 1</h4>
            Making its premier at Detroit's Motor City Comic Con May 17th
            through May 19th.
            <a href="coming-soon.html">Visit Star Panic's Page</a>
          </div>
        </div>

        <div className="subcontent">
          {/* <img src={homeTri2} width="100%" alt="contentImage" /> */}
          <div className="subcontenttext">
            <h4>Rize Requia</h4>
            Showcased in Able Ideaz Manga Minion's Spirit Star Series
            <a href="http://ableideaz.com/comics/spirit-star/issue-3.php">
              Check Out the Latest
            </a>
          </div>
        </div>

        <div className="subcontent">
          {/* <img src={homeTri3} width="100%" alt="contentImage" /> */}
          <div className="subcontenttext">
            <h4>New Things From CNE</h4>
            Follow our social media to keep up with upcoming projects and
            events!
            <a href="connect.html">Connect With Us!</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
