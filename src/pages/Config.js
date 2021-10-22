import React, { useState, useEffect } from "react";
import {
  AiOutlineUserSwitch,
  AiOutlineUsergroupAdd,
  AiOutlineUserAdd,
  AiOutlineEdit,
  AiOutlineProfile,
} from "react-icons/ai";

import { Navigation, EnterNameEntry, ListAllNameEntries } from "../components";

const Config = (props) => {
  const [config, setConfig] = useState(props.config);
  const [enabledUser, setEnabledUser] = useState(false);
  const [enabledLetter, setEnabledLetter] = useState(false);

  useEffect(() => {
    try {
      const string = JSON.stringify(config);
      window.localStorage.setItem("config", string);
    } catch (exception) {
      console.error("error while writing config data", exception);
    }
  }, [config]);

  return (
    <div
      className="row overflow-hidden"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div className="col-auto">
        <Navigation />
      </div>
      <main className="col" style={{ height: "100vh", overflowX: "auto" }}>
        <div style={{ paddingTop: "32px" }}>
          <div className="row">
            <div className="col-3">
              <h2>Einstellungen</h2>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: "32px" }}>
          <div className="row">
            <div className="col-2 list-group">
              <button
                type="button"
                className="list-group-item list-group-item-action"
                onClick={(event) => {
                  event.preventDefault();
                  setEnabledLetter(false);
                  setEnabledUser(!enabledUser);
                }}
              >
                <AiOutlineUserSwitch /> Benutzer
              </button>
              <button
                type="button"
                className="list-group-item list-group-item-action"
                onClick={(event) => {
                  event.preventDefault();
                  setEnabledUser(false);
                  setEnabledLetter(!enabledLetter);
                }}
              >
                <AiOutlineEdit /> Briefe
              </button>
            </div>

            {enabledUser && (
              <div className="col-10">
                <div className="pb-4">
                  <AiOutlineUsergroupAdd /> weitere Gruppen
                  <EnterNameEntry
                    label="einen Namen hinzufügen"
                    list={config.groups}
                    onSave={(entry) => {
                      setConfig({ ...config, groups: [...entry] });
                    }}
                  />
                  <ListAllNameEntries list={config.groups} />
                </div>
                <div className="pb-4">
                  <AiOutlineUserAdd /> weitere Personen
                  <EnterNameEntry
                    label="einen Namen hinzufügen"
                    list={config.users}
                    onSave={(entry) => {
                      setConfig({ ...config, users: [...entry] });
                    }}
                  />
                  <ListAllNameEntries list={config.users} />
                </div>
              </div>
            )}

            {enabledLetter && (
              <div className="col-10">
                <div className="pb-4">
                  <AiOutlineProfile /> weitere Brieftypen
                  <EnterNameEntry
                    label="einen Typ hinzufügen"
                    list={config.letter}
                    onSave={(entry) => {
                      setConfig({ ...config, letter: [...entry] });
                    }}
                  />
                  <ListAllNameEntries list={config.letter} />
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
export default Config;
