import React, { useState, useEffect } from "react";
import {
  AiOutlineUserSwitch,
  AiOutlineUsergroupAdd,
  AiOutlineUserAdd,
  AiOutlineEdit,
  AiOutlineProfile,
  AiOutlineEuro,
} from "react-icons/ai";

import {
  Text,
  Navigation,
  EnterNameEntry,
  ListAllNameEntries,
  EnterNumberEntry,
} from "../components";

const Config = (props) => {
  const [config, setConfig] = useState(props.config);
  const [enabledUser, setEnabledUser] = useState(false);
  const [enabledLetter, setEnabledLetter] = useState(false);
  const [enabledBudget, setEnabledBudget] = useState(false);

  useEffect(() => {
    try {
      const string = JSON.stringify(config);
      window.localStorage.setItem("config", string);
    } catch (exception) {
      console.error("error while writing config data", exception);
    }
  }, [config]);

  const [budget, setBudget] = useState(() => {
    try {
      const item = window.localStorage.getItem("budget");
      return item ? JSON.parse(item) : 0;
    } catch (exception) {
      console.error("error while reading outbox data", exception);
      return 0;
    }
  });
  useEffect(() => {
    try {
      const string = JSON.stringify(budget);
      window.localStorage.setItem("budget", string);
    } catch (exception) {
      console.error("error while writing outbox data", exception);
    }
  }, [budget]);

  return (
    <div
      className="row overflow-hidden"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div className="col-auto">
        <Navigation profile={config.profile} />
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
                  setEnabledUser(!enabledUser);
                  setEnabledLetter(false);
                  setEnabledBudget(false);
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
                  setEnabledBudget(false);
                }}
              >
                <AiOutlineEdit /> Briefe
              </button>
              <button
                type="button"
                className="list-group-item list-group-item-action"
                onClick={(event) => {
                  event.preventDefault();
                  setEnabledUser(false);
                  setEnabledLetter(false);
                  setEnabledBudget(!enabledBudget);
                }}
              >
                <AiOutlineEuro /> Budget
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

            {enabledBudget && (
              <div className="col-10">
                <div className="pb-4">
                  <AiOutlineEuro /> Geldbetrag aufladen
                  <EnterNumberEntry
                    label="weiteres Budget hinzufügen"
                    total={budget}
                    onSave={(sum) => {
                      setBudget(sum);
                    }}
                  />
                  <div className="list-group col-6 mt-2 mb-2">
                    <div className="list-group-item d-flex p-0">
                      <div className="ps-3 pe-3 pt-2 pb-2 m-0 flex-grow-1">
                        <Text currency="Euro">{budget}</Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pb-4">
                  <AiOutlineProfile /> weitere Sendearten
                  <EnterNameEntry
                    label="einen Typ hinzufügen"
                    list={config.postalItems}
                    onSave={(entry) => {
                      setConfig({ ...config, postalItems: [...entry] });
                    }}
                  />
                  <ListAllNameEntries list={config.postalItems} />
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
