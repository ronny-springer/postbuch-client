import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { Navigation, OutboxForm, OutboxList } from "../components";

const Outbox = ({ config }) => {
  const [outbox, setOutbox] = useState([]);
  const [query, setQuery] = useState("");

  const [budget, setBudget] = useState(496.1);

  useEffect(() => {
    try {
      const response = window.localStorage.getItem("outbox");
      const json = JSON.parse(response) || "";
      setOutbox(json);
    } catch (exception) {
      console.error("error while reading outbox data", exception);
    }
  }, []);

  useEffect(() => {
    try {
      const string = JSON.stringify(outbox);
      window.localStorage.setItem("outbox", string);
    } catch (exception) {
      console.error("error while writing outbox data", exception);
    }
  }, [outbox]);

  useEffect(() => {
    if (query.length) {
      const result = outbox.filter(
        ({ empfänger }) =>
          empfänger.toLowerCase().indexOf(query.toLowerCase()) >= 0
      );
      setOutbox(result);
    } else {
      setOutbox(outbox);
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
              <h2>Ausgang</h2>
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
            <div className="col-2">
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

        <div style={{ paddingTop: "32px" }}>
          <OutboxForm config={config} outbox={outbox} onSave={setOutbox} />
        </div>
        <div className="mt-3">
          <OutboxList outbox={outbox} onEdit={setOutbox} onDelete={setOutbox} />
        </div>
      </main>
    </div>
  );
};

export default Outbox;
