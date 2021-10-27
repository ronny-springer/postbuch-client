import React, { useState } from "react";

const EnterNumberEntry = ({ label = "", total = 0, onSave }) => {
  const [enabledAdd, setEnabledAdd] = useState(false);
  const [number, setNumber] = useState("");

  return (
    <div className="row">
      <div className="col-6 pe-0">
        <div className="d-flex p-0">
          <input
            type="number"
            min="0"
            max="9999"
            className="form-control"
            placeholder={label}
            value={number}
            onChange={(event) => {
              const number = event.target.value;
              setNumber(Number(number));

              if (!number.length) return setEnabledAdd(false);
              setEnabledAdd(true);
            }}
          />
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: "42px" }}
            disabled={!enabledAdd}
            onClick={(event) => {
              event.preventDefault();
              const sum = total + number;
              onSave(sum);
              setNumber("");
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnterNumberEntry;
