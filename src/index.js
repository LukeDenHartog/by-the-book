import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from "./components/Navbar/Navbar.js"
import Footer from "./components/Footer/Footer.js"
import Carousel from "./pages/Home/Carousel.js"
import Contentgroup from "./components/GroupedCards/GroupedCards.js"
import BytheBookStatement from "./components/MissionStatement/BytheBookStatement.js"

ReactDOM.render(
  <React.StrictMode>
    <Menubar/>
    <Carousel/>
    <Contentgroup/>
    <BytheBookStatement/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals