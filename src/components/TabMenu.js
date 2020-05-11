import React, { Component } from "react";
import Icon from "@ant-design/icons";

export default class TabMenu extends Component {
  render() {
    return (
      <div>
        <button type="button" class="btn btn-light" style={{width:150}}>
          <Icon style={{ fontSize: 40 }} component={this.props.component} />
          <p>{this.props.label}</p>
        </button>
      </div>
    );
  }
}
