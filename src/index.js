import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// Custom Pages/Components
import Menubar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import Carousel from "./pages/Home/Carousel.js";
import ContentGroup from "./components/GroupedCards/GroupedCards.js";
import ByTheBookStatement from "./components/MissionStatement/BytheBookStatement.js";

ReactDOM.render(
  <React.StrictMode>
    <Menubar />
    <Carousel />
    <ContentGroup />
    <ByTheBookStatement />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);