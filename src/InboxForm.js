import React from "react";

const InboxForm = () => {
  return (
    <div>
      <div class="row px-5 py-1">
        <div class="col-md-1">
          <div className="form-floating">
            <select id="inputState" class="form-select">
              <option selected>Herr</option>
              <option>Frau</option>
              <option>Divers</option>
            </select>
            <label for="inputState" class="form-label">
              Anrede
            </label>
          </div>
        </div>
        <div class="col-md-2">
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" />
            <label for="floatingInput">Vorname</label>
          </div>
        </div>
        <div class="col-md-2">
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" />
            <label for="floatingInput">Nachname</label>
          </div>
        </div>
        <div class="col-md-2">
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" />
            <label for="floatingInput">Straße</label>
          </div>
        </div>
        <div class="col-md-1">
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              maxLength="5"
              id="floatingInput"
            />
            <label for="floatingInput">Nummer</label>
          </div>
        </div>
        <div class="col-md-1">
          <div class="form-floating mb-3">
            <input
              type="text"
              inputmode="numeric"
              pattern="[0-9]{5}"
              maxLength="5"
              class="form-control"
              id="floatingInput"
            />
            <label for="floatingInput">PLZ</label>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" />
            <label for="floatingInput">Ort</label>
          </div>
        </div>
      </div>

      <div class="row px-5 py-1">
        <div class="col-md-2">
          <div className="form-floating">
            <select id="inputState" class="form-select">
              <option selected>Allgemein</option>
              <option>Rechnung</option>
              <option>Werbung</option>
            </select>
            <label for="inputState" class="form-label">
              Anliegen
            </label>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" />
            <label for="floatingInput">Betreff</label>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" />
            <label for="floatingInput">Anmerkung</label>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-floating mb-3">
            <select id="inputState" class="form-select">
              <option selected>Bürgermeister</option>
              <option>Haupt- & Personalamt</option>
              <option>Kämmerei</option>
            </select>
            <label for="inputState" class="form-label">
              Empfänger
            </label>
          </div>
        </div>
        <div className="d-grid col-1 mx-auto">
          <button type="button" class="btn btn-primary">
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default InboxForm;
