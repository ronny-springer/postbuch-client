import React, { useState } from "react";

const EnterNameEntry = ({ label = "", list = [], onSave }) => {
  const [enabledAdd, setEnabledAdd] = useState(false);
  const [name, setName] = useState("");

  return (
    <div className="row">
      <div className="col-6 pe-0">
        <div className="d-flex p-0">
          <input
            type="text"
            className="form-control"
            placeholder={label}
            value={name}
            onChange={(event) => {
              const name = event.target.value;
              setName(name);

              if (!name.length) return setEnabledAdd(false);
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
              onSave([{ id: list.length, name }, ...list]);
              setName("");
              setEnabledAdd(false);
            }}
            onKeyDown={(event) => {
              event.preventDefault();
              if (event.key === "Enter") {
                onSave([{ id: list.length, name }, ...list]);
                setName("");
                setEnabledAdd(false);
              }
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnterNameEntry;
