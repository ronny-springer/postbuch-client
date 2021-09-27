import React from "react";
import { hydrate, render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

import { Inbox, Outbox, Trash, FourOhFour } from "./pages";

const wayToRender = module.hot ? render : hydrate;
wayToRender(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/inbox" component={Inbox} />
        <Route exact path="/outbox" component={Outbox} />
        <Route exact path="/trash" component={Trash} />

        <Route path="*" component={FourOhFour} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
