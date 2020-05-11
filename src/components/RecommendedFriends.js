import React, { Component } from "react";

import FollowFriendListItem from "./FollowFriendListItem";

export default class RecommendedFriends extends Component {
  constructor(props) {
    super(props);
    this.friends = ["friend1", "friend2", "friend3"];
  }

  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-center">
          <table class="table table-borderless" style={{ width: 400 }}>
            <thead>
              <tr>
                <td scope="col" className='text-left'>Gợi ý cho bạn</td>
                <td scope="col">Xem tất cả</td>
              </tr>
            </thead>
            <tbody>
              {this.friends.map((friend, index) => (
                <tr>
                  <td scope="row">
                    <FollowFriendListItem friend={friend} key={index} />
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
