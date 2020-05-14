import React, { Component } from "react";

export default class LoginForm extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <h1>Sign In</h1>
            <br />
            <p className="text-left">Email</p>
            <input
              type="text"
              className="form-control"
              placeholder={this.props.email}
            ></input>
            <br />
            <p className="text-left">Password</p>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            ></input>
            <br />
            <button type="button" className="btn btn-primary form-control">
              Sign In
            </button>
            <br />
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label className="form-check-label">Keep me signed in</label>
            </div>
            <br />
            <div className="d-flex justify-content-around">
              <button>Forgot username?</button>
              <button>Forgot password?</button>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    );
  }
}
