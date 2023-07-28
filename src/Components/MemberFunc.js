import React from "react";

function MemberFunc(props) {
  return (
    <div>
      <h1>Member function</h1>
      <button onClick={() => props.data()}>Click Me</button>
    </div>
  );
}

export default MemberFunc;
