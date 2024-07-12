import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// Custom Pages/Components
import LandingPage from "../src/pages/Home/LandingPage"

ReactDOM.render(
  <React.StrictMode>
    <LandingPage/>
  </React.StrictMode>,
  document.getElementById("root")
);