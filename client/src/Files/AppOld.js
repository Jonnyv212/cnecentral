import React, { Component } from "react";
import "./App.css";
import Banner from "../banner";
import { Button } from "antd";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class CompanyName extends Component {
  render() {
    return <h1>Crystal Nova Entertainment</h1>;
  }
}

class SPRName extends Component {
  render() {
    return <h1>Star Panic: Richi</h1>;
  }
}

export default CompanyName;
