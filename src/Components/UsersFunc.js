import { useState } from "react";

function Hello() {
  // return (
  //   <div>
  //     <h1>Hello John Doe</h1>
  //   </div>
  // );

  // Here we are using js without jsx
  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h2", null, "This is from create element")
  // );

  // Events and function

  // function GreetMSG() {
  //   // alert("Welcome to my Office");
  //   data = "Peter";
  //   return alert(data);
  // }

  // let data = "John Wick";
  // return (
  //   <div>
  //     <h1>Hey</h1>
  //     <p>{data}</p>
  //     <button onClick={GreetMSG}>Click Me</button>
  //   </div>
  // );

  // State with Functional component
  const [data, setData] = useState(0);
  function changeData() {
    setData(data + 1);
  }
  return (
    <div className="Abc">
      <h1>{data}</h1>
      <button onClick={changeData}>Click Me</button>
    </div>
  );
}

export default Hello;
