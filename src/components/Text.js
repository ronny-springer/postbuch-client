import React from "react";
import "./Text.modul.css";

const Text = ({ text = "" }) => {
  return text.length > 0 ? (
    <p className="text-ellipsis">{text}</p>
  ) : (
    <p className="text-empty">-</p>
  );
};

export default Text;
