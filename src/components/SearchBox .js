import React, { Component } from "react";

import search1 from "../images/search1.svg";
import search2 from "../images/search2.svg";

export default class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFocused: false,
      value: "",
    };
  }

  onFocused = (event) => {
    if (event.target.value) {
      this.setState({
        isFocused: true,
        value: event.target.value,
      });
    } else {
      this.setState({
        isFocused: false,
        value: "",
      });
    }
  };

  render() {
    const { isFocused, value } = this.state;
    return (
      <div className="d-flex justify-content-center">
        <input
          type="text"
          className="form-control mr-3"
          placeholder="Type something to search ..."
          style={
            value.length > 10
              ? {
                  width: 400,
                  backgroundColor: "#F00",
                  borderColor: "green",
                }
              : {
                  width: 400,
                  backgroundColor: "#d4d4d4",
                  borderColor: "yellow",
                }
          }
          onChange={this.onFocused}
        />
        <img src={isFocused ? search2 : search1} style={{ width: 20 }} alt="" />
      </div>
    );
  }
}
