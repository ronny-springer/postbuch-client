import React, { StrictMode } from "react";
import { hydrate, render } from "react-dom";
import reportWebVitals from "./reportWebVitals";

import Router from "./Router";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const wayToRender = module.hot ? render : hydrate;
wayToRender(
  <StrictMode>
    <Router />
  </StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
