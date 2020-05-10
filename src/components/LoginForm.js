import React, { Component } from "react";

export default class LoginForm extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-4"></div>
          <div class="col-4">
            <h1>Sign In</h1>
            <br />
            <p className="text-left">Username</p>
            <input
              type="text"
              class="form-control"
              placeholder="Username"
            ></input>
            <br />
            <p className="text-left">Password</p>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
            ></input>
            <br />
            <button type="button" class="btn btn-primary form-control">
              Sign In
            </button>
            <br />
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                Keep me signed in
              </label>
            </div>
            <br/>
            <div class='d-flex justify-content-around'>
                <a href='#'>Forgot username?</a>
                <a href='#'>Forgot password?</a>
            </div>
          </div>
          <div class="col-4"></div>
        </div>
      </div>
    );
  }
}
