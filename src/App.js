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
import Table from "./components/Table";
import Notification from "./components/Notification";
import TrafficLight from "./components/TrafficLight";
import SearchBox from "./components/SearchBox ";
import Modal from "./components/Modal";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoItems: [
        { title: "mua bim bim", isComplete: false },
        { title: "di cho", isComplete: false },
        { title: "tam bien", isComplete: false },
      ],
    };
  }

  onClick = (item) => {
    return () => {
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          { ...item, isComplete: !item.isComplete },
          ...todoItems.slice(index + 1),
        ],
      });
    };
  };

  render() {
    const { todoItems } = this.state;
    return (
      <div className="container mt-3 text-center">
        <h5>Bài tập 06</h5>
        <Header />
        <br />
        <LoginForm email="abc@example.com" />
        <hr />
        <h5>Bài tập 07</h5>
        <div className="d-flex justify-content-center">
          <TabMenu component={HomeOutlined} label="Home" />
          <TabMenu component={GiftOutlined} label="Deals" />
          <TabMenu component={CloudUploadOutlined} label="Upload" />
          <TabMenu component={CoffeeOutlined} label="Work" />
          <TabMenu component={ToolOutlined} label="Settings" />
        </div>
        <hr />
        <h5>Bài tập 08</h5>
        <RecommendedFriends />
        <hr />
        <h5>Bài tập 10</h5>
        <Table />
        <hr />
        <h5>Bài tập 11</h5>
        <Notification hasUnread={0} />
        <hr />
        <h5>Bài học 11</h5>
        {todoItems.length > 0 &&
          todoItems.map((item, index) => (
            <TodoItem item={item} key={index} onClick={this.onClick(item)} />
          ))}
        {todoItems.length === 0 && <div>Nothing</div>}
        <hr />
        <h5>Bài học 12</h5>
        <TrafficLight />
        <hr />
        <h5>Bài tập 12</h5>
        <SearchBox />
        <hr />
        <h5>Bài tập 13</h5>
        <Modal />
      </div>
    );
  }
}
