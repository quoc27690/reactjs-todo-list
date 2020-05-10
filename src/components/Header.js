import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h5>Go Back</h5>
          <button className="btn btn-primary ml-auto">Sign Up</button>
        </div>
      </div>
    );
  }
}
