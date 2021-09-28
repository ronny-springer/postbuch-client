import React from "react";
import { Navigation } from "../components";

const Outbox = () => {
  return (
    <div
      className="row overflow-hidden"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div className="col-2">
        <Navigation />
      </div>
      <div className="col">
        <main className="pt-12">Outbox</main>
      </div>
    </div>
  );
};

export default Outbox;
