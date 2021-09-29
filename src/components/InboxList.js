import React from "react";
import Text from "./Text";

const InboxList = ({ inbox = [] }) => {
  return inbox.length > 0 ? (
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
            <div className="col-3 ps-4 pe-4">
              <Text text={betreff} />
            </div>
            <div className="col-2 ps-4 pe-4">
              <Text text={anmerkung} />
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : null;
};

export default InboxList;
