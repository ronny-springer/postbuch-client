import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { Inbox, Outbox, Config, FourOhFour } from "./pages";

const Router = ({ config }) => {
  const user = { name: "Ronny", profile: "admin" };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/inbox">
          <Inbox config={config} user={user} />
        </Route>

        <Route exact path="/outbox">
          <Outbox config={config} user={user} />
        </Route>

        <Route exact path="/config">
          <Config config={config} user={user} />
        </Route>
        <Route exact path="/">
          <Redirect to="/inbox" />
        </Route>

        <Route path="*" component={FourOhFour} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
