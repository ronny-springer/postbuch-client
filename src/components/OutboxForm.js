import React, { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Text } from "../components";

function getPreis(sendung) {
  if (sendung === "Standardbrief") return 0.8;
  if (sendung === "Maxibrief") return 0.95;
  if (sendung === "Einschreiben") return 3.1;
  if (sendung === "Expressbrief") return 11.9;
  if (sendung === "Infosendung") return 0.35;
  if (sendung === "Postkarte") return 0.6;
  if (sendung === "Bote") return 0.0;

  return 0.0;
}

const OutboxForm = ({ outbox = [], config = [], onSave }) => {
  const { letter = [] } = config;
  const currentCounter = outbox.length
    ? Math.max(...outbox.map(({ counter }) => counter)) + 1
    : 0;

  const defaultValues = {
    id: String(Date.now()),
    counter: currentCounter,
    datum: new Date(Date.now()).toLocaleDateString("de-de"),
    empfänger: "",
    type: letter[0].name,
    sendung: "Standardbrief",
    preis: "",
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
            id="empfänger"
            value={inputFields.empfänger}
            onChange={(event) => {
              setInputFields({
                ...inputFields,
                empfänger: event.target.value,
              });
            }}
          />
          <label
            className="text-truncate"
            style={{ width: "100%" }}
            htmlFor="empfänger"
          >
            Empfänger/Firma
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
              defaultValue={letter[0].name}
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
        <div className="d-flex">
          <div className="form-floating" style={{ flexGrow: 1 }}>
            <select
              className="form-select"
              id="sendung"
              aria-label="Sendung"
              defaultValue={inputFields.sendung}
              onChange={(event) => {
                setInputFields({
                  ...inputFields,
                  sendung: event.target.value,
                });
              }}
            >
              <option value="Standardbrief">Standardbrief</option>
              <option value="Maxibrief">Maxibrief</option>
              <option value="Einschreiben">Einschreiben</option>
              <option value="Expressbrief">Expressbrief</option>
              <option value="Infosendung">Infosendung</option>
              <option value="Postkarte">Postkarte</option>
              <option value="Bote">Bote</option>
            </select>
            <label
              className="text-truncate"
              style={{ width: "90%" }}
              htmlFor="sendung"
            >
              Sendung
            </label>
          </div>
          <span
            className="input-group-text"
            style={{ paddingTop: "22px", width: "76px" }}
          >
            <Text currency="Euro">{getPreis(inputFields.sendung)}</Text>
          </span>
        </div>
      </div>

      <div className="col-1">
        <button
          type="submit"
          className="btn btn-primary btn-lg"
          style={{ height: "58px" }}
          id="submitInputFields"
          onClick={(event) => {
            event.preventDefault();
            onSave([
              { ...inputFields, preis: getPreis(inputFields.sendung) },
              ...outbox,
            ]);
            setInputFields({
              ...inputFields,
              id: String(Date.now()),
              empfänger: "",
              type: letter[0].name,
              sendung: "Standardbrief",
              preis: "",
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

export default OutboxForm;
