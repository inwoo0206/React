import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import Library from "./Library";
// import Clock from "./Clock";
// import ConfirmButton from "./chap_08/ConfirmButton";
// import LandingPage from "./chap_09/LandingPage";
// import AttendanceBook from "./chap_10/AttendanceBook";
// import ProfileCard from "./chap_13/ProfileCard";
import DarkOrLight from "./chap_14/DarkOrLight";

ReactDOM.render(
  <React.StrictMode>
    <DarkOrLight />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
