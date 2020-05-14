import React, { Component } from "react";

import classNames from "classnames";

import "../App.css";

import checkmark from "../images/checkmark.svg";
import checkmarkdone from "../images/checkmarkdone.svg";

import PropTypes from "prop-types";

export default class TodoItem extends Component {
  render() {
    const { item, onClick } = this.props;
    let url = checkmark;
    if (item.isComplete) {
      url = checkmarkdone;
    }
    return (
      <div
        onClick={onClick}
        className={classNames("d-flex", "TodoItem", {
          "TodoItem-complete": item.isComplete,
        })}
        style={{ paddingTop: 10, paddingBottom: 10, cursor: "pointer" }}
      >
        <img src={url} style={{ width: 20 }} alt="" />
        <p style={{ marginBottom: 0, marginLeft: 10 }}>{item.title}</p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    isComplete: PropTypes.bool,
  }),
  onCick: PropTypes.func,
  onCickx: PropTypes.func,
};
