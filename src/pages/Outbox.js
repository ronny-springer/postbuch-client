import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import outboxData from "./Outbox.data.json";
import { Navigation, OutboxForm, OutboxList } from "../components";

const Outbox = () => {
  const [outbox, setOutbox] = useState(outboxData);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.length) {
      const result = outbox.filter(
        ({ empfänger }) =>
          empfänger.toLowerCase().indexOf(query.toLowerCase()) >= 0
      );
      setOutbox(result);
    } else {
      setOutbox(outboxData);
    }
  }, [query]);

  const [budget, setBudget] = useState(496.1);
  useEffect(() => {
    const preis = outbox[0].preis;
    setBudget(budget - preis);
  }, [outbox]);

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
                  <div className="form-control">Budget</div>
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
            <OutboxForm outbox={outbox} onSave={setOutbox} />
          </div>
          <div className="mt-3" style={{ height: "72vh", overflowX: "auto" }}>
            <OutboxList outbox={outbox} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Outbox;
