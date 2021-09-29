import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import inboxData from "./Inbox.data.json";
import { Navigation, InboxForm, InboxList } from "../components";

const Inbox = () => {
  const [inbox, setInbox] = useState(inboxData);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.length) {
      const result = inbox.filter(
        ({ absender }) =>
          absender.toLowerCase().indexOf(query.toLowerCase()) >= 0
      );
      setInbox(result);
    } else {
      setInbox(inboxData);
    }
  }, [query]);

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
          <div style={{ paddingTop: "32px" }}>
            <div className="row">
              <div className="col-3">
                <h2>Eingang</h2>
              </div>
              <div className="col-6">
                <div className="input-group">
                  <span className="input-group-text">
                    <AiOutlineSearch />
                  </span>
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Suche"
                    aria-label="Suche"
                    aria-describedby="search-addon"
                    value={query}
                    onChange={(event) => {
                      setQuery(event.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div style={{ paddingTop: "32px" }}>
            <InboxForm inbox={inbox} onSave={setInbox} />
          </div>
          <div className="mt-3" style={{ height: "72vh", overflowX: "auto" }}>
            <InboxList inbox={inbox} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Inbox;
