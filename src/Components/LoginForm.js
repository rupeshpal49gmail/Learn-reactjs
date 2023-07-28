import React, { useState } from "react";

function LoginForm() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  function loginHandler(e) {
    e.preventDefault();
    if (user == " " || pass == " ") {
      console.log("Password must be Required");
    } else if (user.length <= 3 || pass.length <= 3) {
      console.log("Blank input field is not allowed");
    } else {
      console.log("Data will be stored in database");
    }
  }
  function userHandler(e) {
    let item = e.target.value;
    if (item.length <= 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUser(item);
  }
  function passHandler(e) {
    // console.log(a.target.value.length);
    let item = e.target.value;
    if (item.length <= 3) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
    setPass(item);
  }
  return (
    <div>
      <form onSubmit={loginHandler}>
        <input type="text" placeholder="Enter User Id" onChange={userHandler} />
        {userErr ? <span>User Not Valid</span> : " "}
        <br /> <br />
        <input
          type="Password"
          placeholder="Enter User Password"
          onChange={passHandler}
        />
        {passErr ? <span>Password not valid</span> : ""}
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
