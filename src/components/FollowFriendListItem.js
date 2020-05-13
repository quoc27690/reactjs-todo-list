import React, { Component } from "react";

import PropTypes from "prop-types";

export default class FollowFriendListItem extends Component {
  render() {
    const { friend } = this.props;
    return (
      <div className="container">
        <div className="row">
          <img
            src={friend.avatarUrl}
            style={{ width: 50, height: 50, borderRadius: 50 }}
            className="mr-3"
            alt=""
          />
          <div className="text-left">
            {friend.user}
            <p className="text-black-50">Gợi ý cho bạn</p>
          </div>
        </div>
      </div>
    );
  }
}

FollowFriendListItem.propTypes = {
  friend: PropTypes.shape({
    user: PropTypes.string,
    avatarUrl: PropTypes.string,
  }),
};
