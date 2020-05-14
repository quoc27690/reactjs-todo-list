import React, { Component } from "react";

export default class Google extends Component {
  constructor(props) {
    super(props);

    this.inputElement = React.createRef();
  }

  componentDidMount() {
    this.inputElement.current.focus();
  }

  render() {
    return (
      <div style={{ marginBottom: 50 }}>
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          style={{ width: 100 }}
          alt=""
        />
        <div className="input-group mb-3" style={{ marginTop: 20 }}>
          <input
            type="text"
            className="form-control"
            placeholder="Tự động trỏ chuột vào ô input"
            style={{ marginLeft: 300 }}
            ref={this.inputElement}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              style={{ marginRight: 300 }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}
