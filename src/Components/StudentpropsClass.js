import React, { Component } from "react";

export default class StudentpropsClass extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "skyblue",
          borderRadius: 20,
        }}
      >
        <h2>Student: {this.props.name}</h2>
        <h3>Email: {this.props.email}</h3>
      </div>
    );
  }
}
