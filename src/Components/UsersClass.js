import React, { Component } from "react";

class UsersClass extends Component {
  constructor() {
    super();
    this.state = {
      data: 1,
    };
  }

  Greetabc() {
    this.setState({ data: this.state.data + 1 });
  }
  RefreshData() {
    this.setState({ data: (this.state.data = " ") });
  }
  render() {
    return (
      <div>
        <h1>Hello John Doe you are here with class components</h1>
        {/* <GreetMSG /> */}
        {/* {GreetMSG()}
        <Lookup /> */}
        <h4>{this.state.data}</h4>
        <button onClick={() => this.Greetabc()}>Click Me</button>
        <br />
        <button onClick={() => this.RefreshData()}>Refresh</button>
      </div>
    );
  }
}

// function GreetMSG() {
//   return (
//     <div>
//       <h1>Function component from the class component</h1>
//     </div>
//   );
// }

// class Lookup extends Component {
//   render() {
//     return (
//       <div>
//         <h3>This is the class component from the class component</h3>
//       </div>
//     );
//   }
// }

// State with class component

export default UsersClass;
