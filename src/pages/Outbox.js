import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { Navigation, OutboxForm, OutboxList } from "../components";

const Outbox = ({ config }) => {
  const [outbox, setOutbox] = useState(() => {
    try {
      const item = window.localStorage.getItem("outbox");
      return item ? JSON.parse(item) : [];
    } catch (exception) {
      console.error("error while reading outbox data", exception);
      return [];
    }
  });

  useEffect(() => {
    try {
      const string = JSON.stringify(outbox);
      window.localStorage.setItem("outbox", string);
    } catch (exception) {
      console.error("error while writing outbox data", exception);
    }
  }, [outbox]);

  const [budget, setBudget] = useState(() => {
    try {
      const item = window.localStorage.getItem("budget");
      return item ? JSON.parse(item) : 0;
    } catch (exception) {
      console.error("error while reading outbox data", exception);
      return 0;
    }
  });
  useEffect(() => {
    try {
      const string = JSON.stringify(budget);
      window.localStorage.setItem("budget", string);
    } catch (exception) {
      console.error("error while writing outbox data", exception);
    }
  }, [budget]);

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
              <h2>Ausgang</h2>
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
            <div className="col-4">
              <div className="input-group">
                <div className="form-control text-trancate">Budget</div>
                <div className="input-group-text">
                  {budget.toLocaleString("de-DE", {
                    style: "currency",
                    currency: "EUR",
                    minimumFractionDigits: 2,
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {config.profile === "writer" || config.profile === "admin" ? (
          <div style={{ paddingTop: "32px" }}>
            <OutboxForm
              config={config}
              outbox={outbox}
              onSave={(saved) => {
                setBudget(budget - saved[0].preis);
                setOutbox(saved);
              }}
            />
          </div>
        ) : null}
        <div className="mt-3 mb-3">
          <OutboxList
            outbox={outbox.filter(
              ({ empfänger }) =>
                empfänger.toLowerCase().indexOf(query.toLowerCase()) >= 0
            )}
            onEdit={setOutbox}
            onDelete={setOutbox}
          />
        </div>
      </main>
    </div>
  );
};

export default Outbox;
