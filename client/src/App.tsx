import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Main from "./Main/Main";
import Detailes from "./Details/Details";
import Logo from "./Assets/Icons/fibonatix-logo.svg";
import "./Details/details.css";

function App() {
  return (
    <div className="App">
      <div className="head_container">
        <img src={Logo}></img>
        <div className="sub_head">School</div>
      </div>
      <Router>
        <Main path="/" />
        <Detailes path="students/:studentId" />
      </Router>
    </div>
  );
}

export default App;
