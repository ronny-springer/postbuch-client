import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Navigation, InboxForm } from "../components";

const Inbox = () => {
  return (
    <div
      className="row overflow-hidden"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div className="col-2 pt-4">
        <Navigation />
      </div>
      <div className="col">
        <main>
          <InboxForm />
        </main>
      </div>
    </div>
  );
};

export default Inbox;
