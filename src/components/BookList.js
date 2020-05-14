import React, { Component } from "react";

export default class BookList extends Component {
  render() {
    const { book } = this.props;
    return (
      <div className="card col-md-4 mt-3">
        <img
          src="https://loremflickr.com/320/240"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text">{book.description}</p>
        </div>
      </div>
    );
  }
}
