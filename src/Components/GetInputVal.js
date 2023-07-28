import React, { useState } from "react";

function GetInputVal() {
  const [data, setRupesh] = useState(null);
  const [print, setPrint] = useState(false);
  function UpdateMe(val) {
    setRupesh(val.target.value);
    setPrint(false);
  }
  return (
    <div>
      {print ? <h1>{data}</h1> : null}
      <input type="text" onChange={UpdateMe} />
      <button onClick={() => setPrint(true)}>Update Me</button>
    </div>
  );
}

export default GetInputVal;
