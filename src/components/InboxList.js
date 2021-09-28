import React from "react";

const InboxList = ({ inbox = [] }) => {
  return inbox.length > 0 ? (
    <div className="card">
      {inbox.map(({ nummer, datum, absender, betreff, anmerkung }, index) => (
        <div
          className="card-body"
          id={`inbox-row-${index}`}
          key={`inbox-row-${index}`}
          style={{ borderBottom: "1px solid lightgray" }}
        >
          <div className="row">
            <div className="col-1">{nummer}</div>
            <div className="col-2">{datum}</div>
            <div className="col-3 text-ellipsis">{absender}</div>
            <div className="col-3 text-ellipsis">{betreff}</div>
            <div className="col-2 text-ellipsis">{anmerkung}</div>
          </div>
        </div>
      ))}
    </div>
  ) : null;
};

export default InboxList;
