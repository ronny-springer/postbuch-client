import React from "react";
import cx from "classnames";
import { AiOutlineDelete } from "react-icons/ai";
import Text from "./Text";

const InboxList = ({ inbox = [], onEdit, onDelete }) => {
  const displayableInbox = inbox.filter(({ isDisabled }) => !isDisabled) || [];

  if (!displayableInbox.length)
    return (
      <div className="card">
        <p className="card-body alert alert-light mb-0">
          Keine Posteinträge gefunden.
        </p>
      </div>
    );

  return (
    <div className="list-group">
      {displayableInbox.map(
        ({ id, counter, datum, absender, type, recipient }) => (
          <div
            className="list-group-item pe-0"
            id={`inbox-row-${id}`}
            key={`inbox-row-${id}`}
            style={{ borderBottom: "1px solid lightgray" }}
          >
            <div className="row d-flex align-items-center">
              <div className="col-1">{counter}</div>
              <div className="col-2">{datum}</div>
              <div className="col-3">
                <Text text={absender} />
              </div>
              <div className="col-2" style={{ paddingLeft: "24px" }}>
                <Text text={type} />
              </div>
              <div className="col-3" style={{ paddingLeft: "116px" }}>
                <Text text={recipient} />
              </div>
              <div className="col-1">
                <button
                  className={cx("btn", "btn-light")}
                  onClick={(event) => {
                    event.preventDefault();

                    onDelete([
                      ...new Map(
                        [
                          ...inbox,
                          {
                            id,
                            counter: null,
                            datum,
                            absender,
                            type,
                            isDisabled: true,
                          },
                        ].map((item) => [item.id, item])
                      ).values(),
                    ]);
                  }}
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default InboxList;
