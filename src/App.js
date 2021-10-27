import React, { useState, useEffect } from "react";

import Router from "./Router";

const App = () => {
  const [loading, setLoading] = useState(true);

  const defaultConfig = {
    groups: [],
    users: [],
    letter: [],
    postalItems: [],
  };
  const [config, setConfig] = useState(defaultConfig);

  useEffect(() => {
    try {
      const response = window.localStorage.getItem("config");
      const json = JSON.parse(response);
      setConfig(json);
      setLoading(false);
    } catch (exception) {
      console.error("error while reading config data", exception);
    }
  }, []);

  if (loading) return null;

  return <Router config={config} />;
};

export default App;
