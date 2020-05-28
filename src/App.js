import React, { Fragment } from "react";
import "./App.css";

// components
import InputTodos from "./components/InputTodos";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <div className="container">
      <Fragment>
        <InputTodos />
        <ListTodos />
      </Fragment>
    </div>
  );
}

export default App;
