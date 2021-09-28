import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Navigation, InboxForm, InboxList } from "../components";

const Inbox = () => {
  const [inbox, setInbox] = useState([]);
  console.log(inbox);

  return (
    <div
      className="row overflow-hidden"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div className="col-auto">
        <Navigation />
      </div>
      <div className="col">
        <main>
          <div style={{ paddingTop: "112px" }}>
            <InboxForm inbox={inbox} onSave={setInbox} />
          </div>
          <div className="mt-3" style={{ height: "100vh", overflowX: "auto" }}>
            <InboxList inbox={inbox} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Inbox;
