import React, { Component } from "react";

import FollowFriendListItem from "./FollowFriendListItem";

export default class RecommendedFriends extends Component {
  constructor(props) {
    super(props);
    this.friends = [
      { user: "A", avatarUrl: "https://loremflickr.com/320/240" },
      { user: "B", avatarUrl: "https://loremflickr.com/320/240" },
      { user: "C", avatarUrl: "https://loremflickr.com/320/240" },
    ];
  }

  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-center">
          <table className="table table-borderless" style={{ width: 400 }}>
            <thead>
              <tr>
                <td className="text-left">Gợi ý cho bạn</td>
                <td>Xem tất cả</td>
              </tr>
            </thead>
            <tbody>
              {this.friends.map((friend, index) => (
                <tr key={index}>
                  <td>
                    <FollowFriendListItem friend={friend} />
                  </td>
                  <td>
                    <p>Theo dõi</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
