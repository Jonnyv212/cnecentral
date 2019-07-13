import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import "./cnecentral-universal.css";
import "antd/dist/antd.css";

import Main from "./Main";
import Rize from "./rizerequia";
import Construction from "./construction";

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

  Header = () => {
    return (
      <header className="newHeader">
        <img src={this.getImageURL("cne_logo")} alt="Logo" />
        <h1 className="headerh1" style={{ color: "white" }}>
          Crystal Nova Entertainment
        </h1>
      </header>
    );
  };

  Nav = () => {
    return (
      <div className="navmenubar">
        <ul class="navmenuUL">
          <li className="navmenuLI">
            <Link to="/main/">Home</Link>
          </li>

          <li className="navmenuLI">
            <p>
              Series List
              <ul className="dropdown-content">
                <p>Star Panic</p>
                <p>Rize Requia</p>
              </ul>
            </p>
          </li>

          <li className="navmenuLI">
            <p>Merch</p>
          </li>

          <li className="navmenuLI">
            <p>Connect</p>
          </li>
        </ul>
      </div>
    );
  };

  Sidebar = () => {
    return (
      <div class="sidebar">
        <div class="sidebarContent">
          <h4 style={{ color: "white" }}>Series</h4>
          <button className="sidebarButtons">
            <Link to="/construction/"> Star Panic: Richi</Link>
          </button>

          <button className="sidebarButtons">
            <Link to="/rizerequia/"> Rize Requia</Link>
          </button>
        </div>

        <div class="sidebarContent">
          <h4 style={{ color: "white" }}>Affiliations</h4>
          <button className="sidebarButtons" href="http://www.ableideaz.com/">
            Able Ideaz
          </button>
          <button
            className="sidebarButtons"
            href="http://www.Instagram.com/kuribelle"
          >
            Instagram
          </button>
          <button className="sidebarButtons" href="http://www.ableideaz.com/">
            Deviant Art
          </button>
          <button className="sidebarButtons" href="http://www.ableideaz.com/">
            Twitter
          </button>
          <button className="sidebarButtons" href="http://www.ableideaz.com/">
            Facebook
          </button>
        </div>
      </div>
    );
  };

  Footer = () => {
    return (
      <div className="footer">
        <a href="https://www.facebook.com/cneconnect/">
          <img src={this.getImageURL("facebook")} width="4%" alt="fb" />
        </a>
        <a href="https://twitter.com/TweetsCne">
          <img src={this.getImageURL("twitter")} width="4%" alt="twitter" />
        </a>
        <a href="https://www.instagram.com/cneunity">
          <img src={this.getImageURL("instagram")} width="4%" alt="instagram" />
        </a>
        <a href="https://www.deviantart.com/cne-deviant">
          <img
            src={this.getImageURL("deviantart")}
            width="4%"
            alt="deviantart"
          />
        </a>

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
          {this.Header()}
          {this.Nav()}
          <div className="mainContent">
            <Route path="/main/" component={Main} />
            <Route path="/rizerequia/" component={Rize} />
            <Route path="/construction/" component={Construction} />
          </div>
          {this.Sidebar()}
          {this.Footer()}
        </div>
      </Router>
    );
  }
}

export default App;
