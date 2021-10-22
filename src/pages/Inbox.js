import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { Navigation, InboxForm, InboxList } from "../components";

const Inbox = ({ config }) => {
  const [inbox, setInbox] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    try {
      const response = window.localStorage.getItem("inbox");
      const json = JSON.parse(response);
      setInbox(json);
    } catch (exception) {
      console.error("error while reading inbox data", exception);
    }
  }, []);

  useEffect(() => {
    try {
      const string = JSON.stringify(inbox);
      window.localStorage.setItem("inbox", string);
    } catch (exception) {
      console.error("error while writing inbox data", exception);
    }
  }, [inbox]);

  useEffect(() => {
    if (query.length) {
      const result = inbox.filter(
        ({ absender }) =>
          absender.toLowerCase().indexOf(query.toLowerCase()) >= 0
      );
      setInbox(result);
    } else {
      setInbox(inbox);
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

      <main className="col" style={{ height: "100vh" }}>
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
          <InboxForm config={config} inbox={inbox} onSave={setInbox} />
        </div>
        <div className="mt-3">
          <InboxList inbox={inbox} onEdit={setInbox} onDelete={setInbox} />
        </div>
      </main>
    </div>
  );
};

export default Inbox;
