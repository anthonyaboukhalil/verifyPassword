import React from "react";
import Password from "./Password";
const App = () => {
  const onFormSubmit = (input) => {
    console.log(input);
  };
  return (
    <div className="container position-absolute top-50 start-50 translate-middle ">
      <Password onFormSubmit={onFormSubmit} />
    </div>
  );
};

export default App;
