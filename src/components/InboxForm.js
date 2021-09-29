import React, { useEffect, useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const InboxForm = ({ inbox = [], onSave }) => {
  const [inputFields, setInputFields] = useState([]);

  const defaultValues = {
    id: inbox.length,
    datum: new Date(Date.now()).toLocaleDateString("de-de"),
    absender: "",
    betreff: "Anfrage",
    anmerkung: "",
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
            id="absender"
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
          <select
            className="form-select"
            id="betreff"
            aria-label="Betreff"
            defaultValue={inputFields.betreff}
            onChange={(event) => {
              setInputFields({
                ...inputFields,
                betreff: event.target.value,
              });
            }}
          >
            <option value="Anfrage">Anfrage</option>
            <option value="Angebot">Angebot</option>
            <option value="Bestätigung">Bestätigung</option>
            <option value="Rechnung">Rechnung</option>
            <option value="Mahnung">Mahnung</option>
            <option value="Werbebrief">Werbebrief</option>
            <option value="persönlicher Brief">persönlicher Brief</option>
          </select>
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
          type="submit"
          className="btn btn-primary btn-lg"
          style={{ height: "58px" }}
          id="submitInputFields"
          onClick={(event) => {
            event.preventDefault();
            onSave([inputFields, ...inbox]);
            setInputFields({ ...inputFields, id: inputFields.id + 1 });
          }}
        >
          <AiOutlineCheckCircle />
        </button>
      </div>
    </div>
  );
};

export default InboxForm;
