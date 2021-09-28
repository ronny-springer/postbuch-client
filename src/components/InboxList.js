import React from "react";

const InboxList = ({ inbox = [] }) => {
  return inbox.length > 0 ? (
    <div className="list-group px-4 py-1">
      {inbox.map(({ nummer, datum, absender, betreff, anmerkung }) => (
        <div
          className="list-group-item"
          id={`inbox-row-${nummer}`}
          key={`inbox-row-${nummer}`}
        >
          <div className="row">
            <div className="col-md-1">{nummer}</div>
            <div className="col-md-2">{datum}</div>
            <div className="col-md-3 text-ellipsis">{absender}</div>
            <div className="col-md-3 text-ellipsis">{betreff}</div>
            <div className="col-md-2 text-ellipsis">{anmerkung}</div>
          </div>
        </div>
      ))}
    </div>
  ) : null;
};

export default InboxList;
