import React, { Component } from "react";

export default class Table extends Component {
  constructor(props) {
    super(props);

    this.table = [
      { first: "Mark", last: "Otto", hanlde: "@mdo", isEven: false },
      { first: "Jacob", last: "Thornton", hanlde: "@fat", isEven: true },
      { first: "Larry", last: "the Bird", hanlde: "@twitter", isEven: false },
    ];
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {this.table.map((item, index) => (
              <tr key={index} className={item.isEven ? "isEven" : ""}>
                <td>{index + 1}</td>
                <td>{item.first}</td>
                <td>{item.last}</td>
                <td>{item.first}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
