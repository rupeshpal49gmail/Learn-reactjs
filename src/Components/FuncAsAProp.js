import React from "react";

function FuncAsAProp(props) {
  return (
    <div>
      <h1>User Components</h1>
      <button onClick={() => props.data()}>Call Data function</button>
    </div>
  );
}

export default FuncAsAProp;
