import React from "react";
import Text from "./Text";

const InboxList = ({ inbox = [] }) => {
  if (!inbox.length)
    return (
      <div className="card">
        <p className="card-body alert alert-light">
          Keine Posteinträge gefunden.
        </p>
      </div>
    );

  return (
    <div className="card">
      {inbox.map(({ id, datum, absender, betreff, anmerkung }) => (
        <div
          className="card-body"
          id={`inbox-row-${id}`}
          key={`inbox-row-${id}`}
          style={{ borderBottom: "1px solid lightgray" }}
        >
          <div className="row">
            <div className="col-1">{id}</div>
            <div className="col-2">{datum}</div>
            <div className="col-3 pe-3">
              <Text text={absender} />
            </div>
            <div className="col-3 ps-4">
              <Text text={betreff} />
            </div>
            <div className="col-2 ps-4">
              <Text text={anmerkung} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InboxList;
