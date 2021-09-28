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
      <div className="col-2">
        <Navigation />
      </div>
      <div className="col">
        <main style={{ paddingTop: "124px" }}>
          <InboxForm inbox={inbox} onSave={setInbox} />
          <InboxList inbox={inbox} />
        </main>
      </div>
    </div>
  );
};

export default Inbox;
