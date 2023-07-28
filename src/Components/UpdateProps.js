import React, { Component } from "react";
import StudentpropsClass from "./StudentpropsClass";

class UpdateProps extends Component {
  constructor() {
    super();
    this.state = {
      name: "Hari Om",
      email: "hariom3904@yopmail.com",
    };
  }

  render() {
    return (
      <div>
        <StudentpropsClass name={this.state.name} email={this.state.email} />
        <button
          onClick={() =>
            this.setState({
              name: "John Doe",
              email: "johndoe9023@yopmail.com",
            })
          }
        >
          Update Me
        </button>
      </div>
    );
  }
}

export default UpdateProps;
