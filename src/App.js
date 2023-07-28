import "./App.css";
import FuncAsAProp from "./Components/FuncAsAProp";
import MemberFunc from "./Components/MemberFunc";
// import LoginForm from "./Components/LoginForm";
// import { Component } from "react";
// import UsersClass from "./Components/UsersClass";
// import Hello from "./Components/UsersFunc";
// import Student from "./Components/StudentpropsFunc";
// import UpdateProps from "./Components/UpdateProps";
// import GetInputVal from "./Components/GetInputVal";
// import HideShow from "./Components/HideShow";
// import Forms from "./Components/Forms";
// import ConditionalRender from "./ConditionalRender";
function App() {
  function getData() {
    console.log("I am a function as a props");
  }
  return (
    <div>
      {/* <Hello /> */}
      {/* <UsersClass /> */}
      {/* <HelloJohn /> */}
      {/* <Student
        data="Anil"
        email="anil@yopmail.com"
        address={{ addres: "Varanasi Uttar Pradesh", zipcode: 221104 }}
      /> */}
      {/* <Student
        data="Shyam"
        email="muraliwale@yopmail.com"
        address={{ addres: "Mirzapur Uttar Pradesh", zipcode: 421065 }}
      /> */}
      {/* <Student
        data="kanha"
        email="gokul@yopmail.com"
        address={{ addres: "Jaunpur Uttar Pradesh", zipcode: 789364 }}
      /> */}
      {/* <Student data={data} /> */}
      {/* <UpdateProps /> */}
      {/* <GetInputVal /> */}
      {/* <HideShow /> */}
      {/* <Forms /> */}
      {/* <ConditionalRender /> */}
      {/* <LoginForm /> */}
      <FuncAsAProp data={getData} />
      <div>
        <MemberFunc data={getData} />
      </div>
    </div>
  );
}

// class HelloJohn extends Component {
//   render() {
//     return (
//       <div>
//         <h5>This is form inside the main components</h5>
//       </div>
//     );
//   }
// }
export default App;
