import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    console.log("Counter constructor");
    super(props);

    this.state = {
      count: 0,
    };
  }

  increase = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrease = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    console.log("Counter render");
    return (
      <div
        className="d-flex justify-content-center"
        style={{ alignItems: "center" }}
      >
        <button
          className="btn btn-primary"
          type="submit"
          onClick={this.increase}
        >
          +
        </button>
        <div style={{ marginLeft: 20, marginRight: 20 }}>
          {this.state.count}
        </div>
        <button
          className="btn btn-primary"
          type="submit"
          onClick={this.decrease}
        >
          -
        </button>
      </div>
    );
  }

  componentDidMount() {
    console.log("Counter componentDidMount");
  }
  componentDidUpdate() {
    console.log("Counter componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("Counter componentWillUnmount");
  }
}
