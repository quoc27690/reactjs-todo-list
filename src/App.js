import React, { Component } from "react";

import TodoItem from "./components/TodoItem";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import TabMenu from "./components/TabMenu";
import {
  HomeOutlined,
  GiftOutlined,
  CloudUploadOutlined,
  CoffeeOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import RecommendedFriends from "./components/RecommendedFriends";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.todoItems = ["mua bim bim", "di cho", "tam bien"];
  }
  render() {
    return (
      <div className="container mt-3 text-center">
        <Header />
        <br />
        <LoginForm email="abc@example.com" />
        <br />
        <div className="d-flex justify-content-center">
          <TabMenu component={HomeOutlined} label="Home" />
          <TabMenu component={GiftOutlined} label="Deals" />
          <TabMenu component={CloudUploadOutlined} label="Upload" />
          <TabMenu component={CoffeeOutlined} label="Work" />
          <TabMenu component={ToolOutlined} label="Settings" />
        </div>
        <hr />
        <RecommendedFriends />
        <hr />
        <TodoItem title="mua bim bim" />
        <TodoItem title="di cho" />
        <TodoItem title="tam bien" />
        {this.todoItems.map((item, index) => (
          <TodoItem title={item} key={index} />
        ))}
      </div>
    );
  }
}
