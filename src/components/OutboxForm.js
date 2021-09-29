import React, { useEffect, useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

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

const OutboxForm = ({ outbox = [], onSave }) => {
  const [inputFields, setInputFields] = useState([]);

  const defaultValues = {
    id: outbox.length,
    datum: new Date(Date.now()).toLocaleDateString("de-de"),
    empfänger: "",
    betreff: "",
    sendung: "Standardbrief",
    preis: "",
  };

  useEffect(() => {
    setInputFields(defaultValues);
    return null;
  }, []);

  return (
    <div className="row">
      <div className="col-1">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="id"
            readOnly
            value={inputFields.id}
            onChange={() => {}}
          />
          <label htmlFor="id">#</label>
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
          <label htmlFor="datum">Datum</label>
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
          <label htmlFor="empfänger">Empfänger/Firma</label>
        </div>
      </div>

      <div className="col-3">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="betreff"
            value={inputFields.betreff}
            onChange={(event) => {
              setInputFields({
                ...inputFields,
                betreff: event.target.value,
              });
            }}
          />
          <label htmlFor="betreff">Betreff</label>
        </div>
      </div>

      <div className="col-2">
        <div className="input-group">
          <div className="form-floating">
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
            <label htmlFor="sendung">Sendung</label>
          </div>
          <span
            className="input-group-text"
            style={{ width: "74px", marginLeft: "-4px", paddingTop: "22px" }}
          >
            {getPreis(inputFields.sendung).toLocaleString("de-DE", {
              style: "currency",
              currency: "EUR",
              minimumFractionDigits: 2,
            })}
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
            setInputFields({ ...inputFields, id: inputFields.id + 1 });
          }}
        >
          <AiOutlineCheckCircle />
        </button>
      </div>
    </div>
  );
};

export default OutboxForm;
