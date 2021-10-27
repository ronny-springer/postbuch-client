import React, { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const InboxForm = ({ inbox = [], config = {}, onSave }) => {
  const { letter = [], groups = [], users = [] } = config;
  const [checkedUsers, setCheckedUsers] = useState(false);
  const currentCounter = inbox.length
    ? Math.max(...inbox.map(({ counter }) => counter)) + 1
    : 0;

  const defaultValues = {
    id: String(Date.now()),
    counter: currentCounter,
    datum: new Date(Date.now()).toLocaleDateString("de-de"),
    absender: "",
    type: letter[0].name,
    recipient: groups[0].name,
    isDisabled: false,
  };
  const [inputFields, setInputFields] = useState(defaultValues);

  return (
    <div className="row">
      <div className="col-1">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="counter"
            readOnly
            value={inputFields.counter}
          />
          <label
            className="text-truncate"
            style={{ width: "100%" }}
            htmlFor="counter"
          >
            #
          </label>
        </div>
      </div>

      <div className="col-2">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="datum"
            value={inputFields.datum}
            onChange={(event) => {
              setInputFields({ ...inputFields, datum: event.target.value });
            }}
          />
          <label
            className="text-truncate"
            style={{ width: "100%" }}
            htmlFor="datum"
          >
            Datum
          </label>
        </div>
      </div>

      <div className="col-3">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="absender"
            value={inputFields.absender}
            onChange={(event) => {
              setInputFields({
                ...inputFields,
                absender: event.target.value,
              });
            }}
          />
          <label
            className="text-truncate"
            style={{ width: "100%" }}
            htmlFor="absender"
          >
            Absender/Firma
          </label>
        </div>
      </div>

      {letter.length && (
        <div className="col-2">
          <div className="form-floating">
            <select
              className="form-select"
              id="type"
              aria-label="Brieftyp"
              value={inputFields.type}
              onChange={(event) => {
                setInputFields({
                  ...inputFields,
                  type: event.target.value,
                });
              }}
            >
              {letter
                .sort((a, b) => {
                  return a.name.localeCompare(b.name);
                })
                .map(({ id, name }) => {
                  return (
                    <option
                      key={`type-option-${id}`}
                      className="p-1"
                      value={name}
                    >
                      {name}
                    </option>
                  );
                })}
            </select>
            <label
              className="text-truncate"
              style={{ width: "90%" }}
              htmlFor="type"
            >
              Brieftyp
            </label>
          </div>
        </div>
      )}

      <div className="col-3">
        {(users.length || groups.length) && (
          <div className="d-flex">
            <span className="input-group-text">
              <div
                className="form-check form-switch"
                style={{
                  position: "relative",
                  paddingRight: "2rem",
                  height: "42px",
                }}
              >
                <input
                  style={{ position: "absolute", top: "20px" }}
                  className="form-check-input"
                  type="checkbox"
                  id="switchRecipientTyp"
                  onChange={(event) => {
                    setCheckedUsers(event.target.checked);
                  }}
                />
                <label
                  className="form-check-label"
                  htmlFor="switchRecipientTyp"
                  style={{
                    position: "absolute",
                    left: "-6px",
                    opacity: ".65",
                    paddingTop: "6px",
                    transform:
                      "scale(.85) translateY(-.5rem) translateX(.15rem)",
                  }}
                >
                  Amt/Person
                </label>
              </div>
            </span>
            <div className="form-floating flew-grow-1">
              <select
                className="form-select"
                id="recipient"
                aria-label="Empfänger"
                value={inputFields.recipient}
                onChange={(event) => {
                  setInputFields({
                    ...inputFields,
                    recipient: event.target.value,
                  });
                }}
              >
                {checkedUsers
                  ? users
                      .sort((a, b) => {
                        return a.name.localeCompare(b.name);
                      })
                      .map(({ id, name }) => {
                        return (
                          <option
                            key={`recipient-option-user-${id}`}
                            className="p-1"
                            value={name}
                          >
                            {name}
                          </option>
                        );
                      })
                  : groups
                      .sort((a, b) => {
                        return a.name.localeCompare(b.name);
                      })
                      .map(({ id, name }) => {
                        return (
                          <option
                            key={`recipient-option-group-${id}`}
                            className="p-1"
                            value={name}
                          >
                            {name}
                          </option>
                        );
                      })}
              </select>
              <label
                className="text-truncate"
                style={{ width: "90%" }}
                htmlFor="recipient"
              >
                Weitergeleitet an
              </label>
            </div>
          </div>
        )}
      </div>

      <div className="col-1">
        <button
          type="submit"
          className="btn btn-primary btn-lg"
          style={{ height: "58px" }}
          id="submitInputFields"
          onClick={(event) => {
            event.preventDefault();
            onSave([inputFields, ...inbox]);
            setInputFields({
              ...inputFields,
              id: String(Date.now()),
              absender: "",
              type: letter[0].name,
              recipient: groups[0].name,
              counter: inputFields.counter + 1,
            });
          }}
        >
          <AiOutlineCheckCircle />
        </button>
      </div>
    </div>
  );
};

export default InboxForm;
