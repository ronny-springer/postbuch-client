import React from "react";
import Text from "./Text";

const OutboxList = ({ outbox = [] }) => {
  if (!outbox.length)
    return (
      <div className="card">
        <p className="card-body alert alert-light">
          Keine Posteinträge gefunden.
        </p>
      </div>
    );

  return (
    <div className="card">
      {outbox.map(({ id, datum, empfänger, betreff, sendung, preis }) => (
        <div
          className="card-body"
          id={`outbox-row-${id}`}
          key={`outbox-row-${id}`}
          style={{ borderBottom: "1px solid lightgray" }}
        >
          <div className="row">
            <div className="col-1">{id}</div>
            <div className="col-2">{datum}</div>
            <div className="col-3 pe-3">
              <Text text={empfänger} />
            </div>
            <div className="col-3 ps-4">
              <Text text={betreff} />
            </div>
            <div className="col-2 ps-4">
              <Text
                text={`${sendung} (${preis.toLocaleString("de-DE", {
                  style: "currency",
                  currency: "EUR",
                  minimumFractionDigits: 2,
                })})`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OutboxList;
