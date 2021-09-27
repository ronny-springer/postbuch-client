import React from "react";

import { Navigation } from "../components";

const Trash = () => {
  return (
    <div
      className="row overflow-hidden"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div className="col-2 pt-4">
        <Navigation />
      </div>
      <div className="col">
        <main>Trash</main>
      </div>
    </div>
  );
};

export default Trash;
