import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { Inbox, Outbox, Trash, FourOhFour } from "./pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/inbox" component={Inbox} />
        <Route exact path="/outbox" component={Outbox} />
        <Route exact path="/trash" component={Trash} />
        <Route exact path="/">
          <Redirect to="/inbox" />
        </Route>

        <Route path="*" component={FourOhFour} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
