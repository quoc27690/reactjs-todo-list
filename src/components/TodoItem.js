import React, { Component } from "react";
import "../App.css";

export default class TodoItem extends Component {
  render() {
    const { item } = this.props;
    let className = "TodoItem";
    if (item.isComplete) {
      className += " TodoItem-complete";
    }
    return (
      <div className={className}>
        <p>{item.title}</p>
      </div>
    );
  }
}
