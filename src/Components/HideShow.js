import React from "react";

function HideShow() {
  const [status, setStatus] = React.useState(true);
  return (
    <div>
      {status ? <h1>Hello Toggle</h1> : null}
      {/* <button onClick={() => setStatus(false)}>Hide</button>
      <button onClick={() => setStatus(true)}>Show</button> */}

      <button onClick={() => setStatus(!status)}>Toggle</button>
    </div>
  );
}

export default HideShow;
