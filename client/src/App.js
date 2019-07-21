import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import "./cnecentral-universal.css";
// import "antd/dist/antd.css";

import Main from "./Main/Main.js";
import Rize from "./Rize/rizerequia.js";
import Construction from "./construction";
import banner from "./Files/spr_banner.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get("/db").then(response => {
      let res = response.data.length;
      let resFull = [];
      // For every piece of data in the array push it to a resFull.
      for (let i = 0; i < res; i++) {
        resFull.push(response.data[i]);
      }
      // Set state of data to complete array (resFull) of data
      this.setState({
        data: resFull
      });
    });
  }
  getImageURL = imgName => {
    var image_data = this.state.data
      .filter(item => item.image_name === imgName)
      .map(filteredItem => {
        return filteredItem.image_url;
      });
    return image_data.join();
  };

  header = () => {
    return (
      <div className="header">
        <div className="logo">
          <img src={this.getImageURL("cne_logo")} alt="Logo" />
        </div>
        {this.navLeft()}
      </div>
    );
  };

  navLeft = () => {
    return (
      <ul className="nav">
        <li>
          <Link to="/main/">Home</Link>
        </li>

        <li>Series List</li>

        <li>Merch</li>

        <li>Connect</li>
      </ul>
    );
  };

  navRight = () => {
    return (
      <ul className="nav">
        <li>
          <Link to="/main/">Home</Link>
        </li>

        <li>
          <p>Series List</p>
          {/* <ul className="dropdown-content">
                  <p>Star Panic</p>
                  <p>Rize Requia</p>
                </ul> */}
        </li>

        <li>
          <p>Merch</p>
        </li>

        <li>
          <p>Connect</p>
        </li>
      </ul>
    );
  };

  banner = () => {
    return (
      <div className="banner">
        <div className="inner_banner">
          <img src={banner} alt="fb" />
        </div>
      </div>
    );
  };
  // Sidebar = () => {
  //   return (
  //     <div className="sidebar">
  //       <div className="sidebarContent">
  //         <h4 style={{ color: "white" }}>Series</h4>
  //         <button className="sidebarButtons">
  //           <Link to="/construction/"> Star Panic: Richi</Link>
  //         </button>

  //         <button className="sidebarButtons">
  //           <Link to="/rizerequia/"> Rize Requia</Link>
  //         </button>
  //       </div>

  //       <div className="sidebarContent">
  //         <h4 style={{ color: "white" }}>Affiliations</h4>
  //         <button className="sidebarButtons" href="http://www.ableideaz.com/">
  //           Able Ideaz
  //         </button>
  //         <button
  //           className="sidebarButtons"
  //           href="http://www.Instagram.com/kuribelle"
  //         >
  //           Instagram
  //         </button>
  //         <button className="sidebarButtons" href="http://www.ableideaz.com/">
  //           Deviant Art
  //         </button>
  //         <button className="sidebarButtons" href="http://www.ableideaz.com/">
  //           Twitter
  //         </button>
  //         <button className="sidebarButtons" href="http://www.ableideaz.com/">
  //           Facebook
  //         </button>
  //       </div>
  //     </div>
  //   );
  // };

  footer = () => {
    return (
      <div className="footer">
        <ul>
          <li>
            <a href="https://www.facebook.com/cneconnect/">
              <img src={this.getImageURL("facebook")} alt="fb" />
            </a>
          </li>

          <li>
            <a href="https://twitter.com/TweetsCne">
              <img src={this.getImageURL("twitter")} alt="twitter" />
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/cneunity">
              <img
                src={this.getImageURL("instagram")}
                width="4%"
                alt="instagram"
              />
            </a>
          </li>

          <li>
            <a href="https://www.facebook.com/cneconnect/">
              <img src={this.getImageURL("facebook")} alt="fb" />
            </a>
          </li>

          <li>
            <a href="https://www.deviantart.com/cne-deviant">
              <img src={this.getImageURL("deviantart")} alt="deviantart" />
            </a>
          </li>
        </ul>

        <p>Copyright © 2019 by CRYSTAL NOVA ENTERTAINMENT.</p>
        <p>
          All rights reserved. Any works by Crystal Nova Entertainment thereof
          may not be reproduced or used in any manner whatsoever without the
          express written permission of the publisher except for the use of
          brief quotations in a book review.
        </p>
      </div>
    );
  };

  render() {
    return (
      <Router>
        <div className="page">
          {this.header()}
          {this.banner()}
          <div className="content">
            <Route path="/" component={Main} />
          </div>
          {/* {this.Nav()} */}
          {/* <div className="mainContent"> */}
          {/* <Route path="/" component={Main} /> */}
          {/* <Route path="/rizerequia/" component={Rize} /> */}
          {/* <Route path="/construction/" component={Construction} /> */}
          {/* </div> */}
          {/* {this.Sidebar()} */}
          {this.footer()}
        </div>
      </Router>
    );
  }
}

export default App;
