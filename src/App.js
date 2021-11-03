import React, { useState } from "react";

import Router from "./Router";

const App = () => {
  const defaultConfig = {
    groups: [],
    users: [],
    letter: [],
    postalItems: [],
    profile: "admin",
  };

  const [config] = useState(() => {
    try {
      const response = window.localStorage.getItem("config");
      const json = JSON.parse(response);

      if (!json) return defaultConfig;

      return json;
    } catch (exception) {
      console.error("error while reading config data", exception);
      return defaultConfig;
    }
  });

  return <Router config={config} />;
};

export default App;
