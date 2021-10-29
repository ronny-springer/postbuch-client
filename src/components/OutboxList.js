import React from "react";
import cx from "classnames";
import { AiOutlineDelete } from "react-icons/ai";
import Text from "./Text";

const OutboxList = ({ outbox = [], onEdit, onDelete }) => {
  if (!outbox.length)
    return (
      <div className="list-group">
        <p className="list-group-item alert alert-light mb-0">
          Keine Posteinträge gefunden.
        </p>
      </div>
    );

  return (
    <div className="list-group">
      {outbox.map(
        ({
          id,
          counter,
          datum,
          empfänger,
          type,
          betreff,
          sendung,
          preis,
          isDisabled,
        }) => {
          if (isDisabled) {
            return (
              <div
                className="list-group-item pt-0 pb-0"
                id={`inbox-row-${id}`}
                key={`inbox-row-${id}`}
                style={{
                  borderBottom: "1px solid lightgray",
                  lineHeight: "40px",
                  background: "rgb(249 249 249)",
                }}
              >
                <div className="row d-flex align-items-center">
                  <div className="col-1">
                    <i style={{ color: "rgb(207 207 207)" }}>{counter}</i>
                  </div>
                  <div className="col-2">
                    <i style={{ color: "rgb(207 207 207)" }}>{datum}</i>
                  </div>
                  <div className="col">
                    <i>
                      <Text>Eintrag entfernt!</Text>
                    </i>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div
              className="list-group-item pt-0 pb-0"
              id={`inbox-row-${id}`}
              key={`outbox-row-${id}`}
              style={{ borderBottom: "1px solid lightgray" }}
            >
              <div className="row d-flex align-items-center">
                <div className="col-1">{counter}</div>
                <div className="col-2">{datum}</div>
                <div className="col-2">
                  <Text>{empfänger}</Text>
                </div>
                <div className="col-2" style={{ paddingLeft: "24px" }}>
                  <Text>{type}</Text>
                </div>
                <div className="col-2">
                  <Text>{betreff}</Text>
                </div>
                <div className="col-2" style={{ paddingLeft: "32px" }}>
                  <Text>{`${sendung} (${preis.toLocaleString("de-DE", {
                    style: "currency",
                    currency: "EUR",
                    minimumFractionDigits: 2,
                  })})`}</Text>
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
                              counter,
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
          );
        }
      )}
    </div>
  );
};

export default OutboxList;
