import React from "react";
import cx from "classnames";
import { AiOutlineDelete } from "react-icons/ai";
import Text from "./Text";

const OutboxList = ({ outbox = [], onEdit, onDelete }) => {
  const displayableOutbox =
    outbox.filter(({ isDisabled }) => !isDisabled) || [];

  if (!displayableOutbox.length)
    return (
      <div className="card">
        <p className="card-body alert alert-light mb-0">
          Keine Posteinträge gefunden.
        </p>
      </div>
    );

  return (
    <div className="list-group">
      {displayableOutbox.map(
        ({ id, counter, datum, empfänger, type, sendung, preis }) => (
          <div
            className="list-group-item"
            id={`inbox-row-${id}`}
            key={`outbox-row-${id}`}
            style={{ borderBottom: "1px solid lightgray" }}
          >
            <div className="row d-flex align-items-center">
              <div className="col-1">{counter}</div>
              <div className="col-2">{datum}</div>
              <div className="col-3">
                <Text text={empfänger} />
              </div>
              <div className="col-2" style={{ paddingLeft: "24px" }}>
                <Text text={type} />
              </div>
              <div className="col-3" style={{ paddingLeft: "32px" }}>
                <Text
                  text={`${sendung} (${preis.toLocaleString("de-DE", {
                    style: "currency",
                    currency: "EUR",
                    minimumFractionDigits: 2,
                  })})`}
                />
              </div>
              <div className="col-1">
                <button
                  className={cx("btn", "btn-light")}
                  onClick={(event) => {
                    event.preventDefault();
                    onDelete([
                      ...new Map(
                        [
                          ...outbox,
                          {
                            id,
                            counter: null,
                            datum,
                            empfänger,
                            type,
                            sendung,
                            preis,
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

export default OutboxList;
