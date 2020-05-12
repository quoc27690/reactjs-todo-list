import React, { Component } from "react";

import classNames from "classnames";

import "../App.css";

export default class TodoItem extends Component {
  render() {
    const { item, onClick } = this.props;
    return (
      <div
        onClick={onClick}
        className={classNames("TodoItem", {
          "TodoItem-complete": item.isComplete,
        })}
      >
        <p>{item.title}</p>
      </div>
    );
  }
}
