import React from "react";

const Text = ({ currency = "", children }) => {
  if (!children) return <p className="m-0">-</p>;

  if (currency.length && currency === "Euro")
    return (
      <p className="text-truncate m-0">
        {children.toLocaleString("de-DE", {
          style: "currency",
          currency: "EUR",
          minimumFractionDigits: 2,
        })}
      </p>
    );

  return <p className="text-truncate m-0">{children}</p>;
};

export default Text;
