import React from "react";
import InputForm from "./components/InputForm";
import UserData from "./components/UserData";

const App = () => {
  return (
    <>
      <div className="card">
        <InputForm />
      </div>

      <div className="user-list">
        <UserData />
      </div>
    </>
  );
};

export default App;
