import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./Header";
import InboxForm from "./InboxForm";

const App = () => {
  return (
    <div className="App-body">
      <Header />
      <InboxForm />
    </div>
  );
};

export default App;
