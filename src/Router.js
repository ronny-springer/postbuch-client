import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

<<<<<<< HEAD
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
=======
import { Inbox, Outbox, Trash, FourOhFour } from "./pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/inbox" component={Inbox} />
        <Route exact path="/outbox" component={Outbox} />
        <Route exact path="/trash" component={Trash} />
>>>>>>> 9eaf250f30f86557cac0e23ac96fd17b909926cf
        <Route exact path="/">
          <Redirect to="/inbox" />
        </Route>

        <Route path="*" component={FourOhFour} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
