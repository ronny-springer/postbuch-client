import React, { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const InboxForm = ({ inbox = [], onSave }) => {
  const defaultValues = {
    nummer: inbox.length || 0,
    datum: new Date(Date.now()).toLocaleDateString("de-de"),
    absender: "",
    betreff: "",
    anmerkung: "",
  };
  const [inputFields, setInputFields] = useState(defaultValues);

  return (
    <div className="row">
      <div className="col-1">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="nummer"
            readOnly
            value={inputFields.nummer}
          />
          <label htmlFor="nummer">#</label>
        </div>
      </div>

      <div className="col-2">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="datum"
            required
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
            id="absender"
            required
            value={inputFields.absender}
            onChange={(event) => {
              setInputFields({
                ...inputFields,
                absender: event.target.value,
              });
            }}
          />
          <label htmlFor="absender">Absender/Firma</label>
        </div>
      </div>

      <div className="col-3">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="betreff"
            required
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
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="anmerkung"
            value={inputFields.anmerkung}
            onChange={(event) => {
              setInputFields({
                ...inputFields,
                anmerkung: event.target.value,
              });
            }}
          />
          <label htmlFor="anmerkung">Anmerkung</label>
        </div>
      </div>

      <div className="col-1">
        <button
          type="button"
          className="btn btn-primary btn-lg"
          style={{ height: "58px" }}
          id="submitInputFields"
          onClick={(event) => {
            event.preventDefault();

            onSave([inputFields, ...inbox]);
            setInputFields(defaultValues);
          }}
        >
          <AiOutlineCheckCircle />
        </button>
      </div>
    </div>
  );
};

export default InboxForm;
