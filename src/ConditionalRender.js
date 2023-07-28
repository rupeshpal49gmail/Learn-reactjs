import React, { useState } from "react";

export default function ConditionalRender() {
  const [loggedIn, setLoggedIn] = useState(2);

  //   if (loggedIn) {
  //     return (
  //       <div>
  //         <h1>Welcome to the render function for true condition</h1>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <h1>Welcome to render function for if condition is not true</h1>
  //       </div>
  //     );
  //   }
  // Here is recommended way with ternary operator
  //   return (
  //     <div>
  //       {loggedIn ? (
  //         <h1>Welcome to the render function for true condition</h1>
  //       ) : (
  //         <h1>Welcome to render function for if condition is not true</h1>
  //       )}
  //     </div>
  //   );

  // Here is another way to condtional rendering if condition is more than 2
  return (
    <div>
      {loggedIn == 1 ? (
        <h1>Welcome user 1</h1>
      ) : loggedIn == 2 ? (
        <h1>Welcome user 2</h1>
      ) : (
        <h1>Welcome user 3</h1>
      )}
    </div>
  );
}
