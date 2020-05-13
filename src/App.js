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
import ModalChildren from "./components/ModalChildren";
import empt from "./images/empt.svg";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      todoItems: [
        { title: "mua bim bim", isComplete: false },
        { title: "di cho", isComplete: false },
        { title: "tam bien", isComplete: false },
        { title: "da banh", isComplete: true },
        { title: "nhau", isComplete: true },
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

  onCickX = (item) => {
    return () => {
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      todoItems.splice(index, 1);
      this.setState({
        todoItems: todoItems,
      });
    };
  };

  onChange = (event) => {
    let value = event.target.value;
    this.setState({
      newItem: value,
    });
  };
  onAdd = (newItem) => {
    return () => {
      // Đặt điều kiện để trống hoặc có space thì ko được
      if (newItem === "") {
        return;
      }
      newItem = newItem.trim();
      if (newItem === "") {
        return;
      }

      this.setState({
        newItem: "",
        todoItems: [
          { title: newItem, isComplete: false },
          ...this.state.todoItems,
        ],
      });
    };
  };

  onUncheck = () => {
    const { todoItems } = this.state;
    todoItems.map((item) => (item.isComplete = false));
    this.setState({
      todoItems: todoItems,
    });
  };

  render() {
    const { todoItems, newItem } = this.state;
    return (
      <div className="container mt-3 text-center bg-light">
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
        <h5>Bài học 12</h5>
        <TrafficLight />
        <hr />
        <h5>Bài tập 12</h5>
        <SearchBox />
        <hr />
        <h5>Bài tập 13, 18</h5>
        <p>Modal with props content</p>
        <Modal
          content="What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum."
        />
        <p>Modal with props children</p>
        <ModalChildren>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </ModalChildren>
        <hr />
        <h5>Bài tập 17</h5>
        <div
          className="p-3 bg-TodoList rounded shadow-sm"
          style={{ marginLeft: 300, marginRight: 300 }}
        >
          <h4 className="text-white">DAILIST</h4>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Add A New Item"
              value={newItem}
              onChange={this.onChange}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.onAdd(newItem)}
              >
                Add
              </button>
            </div>
          </div>

          <div className="mt-3">
            <p className="text-left" style={{ marginBottom: 0 }}>
              UPCOMING
            </p>
            {todoItems.length > 0 &&
              todoItems
                .filter((item) => !item.isComplete)
                .map((item, index) => (
                  <div className="d-flex border-bottom" key={index}>
                    <TodoItem item={item} onClick={this.onClick(item)} />
                    <button
                      type="button"
                      className="close ml-auto"
                      onClick={this.onCickX(item)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
            {todoItems.filter((item) => !item.isComplete).length === 0 && (
              <div>
                <img src={empt} style={{ width: 200, height: 200 }}></img>
              </div>
            )}
          </div>

          <div className="mt-3">
            <p className="text-left" style={{ marginBottom: 0 }}>
              FINISHED
            </p>
            {todoItems.length > 0 &&
              todoItems
                .filter((item) => item.isComplete)
                .map((item, index) => (
                  <div className="d-flex border-bottom" key={index}>
                    <TodoItem item={item} onClick={this.onClick(item)} />
                    <button
                      type="button"
                      className="close ml-auto"
                      onClick={this.onCickX(item)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
            {todoItems.filter((item) => item.isComplete).length === 0 && (
              <div>
                <img src={empt} style={{ width: 200, height: 200 }}></img>
              </div>
            )}
          </div>

          <small className="d-block text-right mt-3">
            <button className="btn btn-light" onClick={this.onUncheck}>
              All Uncheck
            </button>
          </small>
        </div>
        <hr />
      </div>
    );
  }
}
