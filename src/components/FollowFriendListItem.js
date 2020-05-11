import React, { Component } from "react";

export default class FollowFriendListItem extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <img
            src="https://loremflickr.com/320/240"
            style={{ width: 50, height: 50, borderRadius: 50 }}
            className="mr-3"
            alt=''
          />
          <div className="text-left">
            {this.props.friend}
            <p className="text-black-50">Gợi ý cho bạn</p>
          </div>
        </div>
      </div>
    );
  }
}
