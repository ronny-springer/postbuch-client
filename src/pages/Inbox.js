import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { Navigation, InboxForm, InboxList } from "../components";

const Inbox = ({ config }) => {
  const [inbox, setInbox] = useState(() => {
    try {
      const item = window.localStorage.getItem("inbox");
      return item ? JSON.parse(item) : [];
    } catch (exception) {
      console.error("error while reading inbox data", exception);
      return [];
    }
  });

  useEffect(() => {
    try {
      const string = JSON.stringify(inbox);
      window.localStorage.setItem("inbox", string);
    } catch (exception) {
      console.error("error while writing inbox data", exception);
    }
  }, [inbox]);

  const [query, setQuery] = useState("");

  return (
    <div className="row overflow-hidden">
      <div className="col-auto">
        <Navigation profile={config.profile} />
      </div>

      <main className="col pe-4">
        <div style={{ paddingTop: "32px" }}>
          <div className="row">
            <div className="col-3">
              <h2>Eingang</h2>
            </div>
            <div className="col-4">
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

        {config.profile === "writer" || config.profile === "admin" ? (
          <div style={{ paddingTop: "32px" }}>
            <InboxForm config={config} inbox={inbox} onSave={setInbox} />
          </div>
        ) : null}
        <div className="mt-3 mb-3">
          <InboxList
            inbox={inbox.filter(
              ({ absender }) =>
                absender.toLowerCase().indexOf(query.toLowerCase()) >= 0
            )}
            onEdit={setInbox}
            onDelete={setInbox}
          />
        </div>
      </main>
    </div>
  );
};

export default Inbox;
