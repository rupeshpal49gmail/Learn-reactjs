import React, { useState } from "react";

export default function Forms() {
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [interest, setInterest] = useState("");
  function getFormData(e) {
    console.log(name, tnc, interest);
    e.preventDefault();
  }
  return (
    <div>
      <h1>Handle form in react</h1>
      <form onSubmit={getFormData}>
        <input
          type="text"
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <br />
        <select onChange={(e) => setInterest(e.target.value)}>
          <option>Select Option</option>
          <option>One</option>
          <option>Two</option>
          <option>three</option>
          <option>Four</option>
        </select>
        <br />
        <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
        <span>Accept Terms</span>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
