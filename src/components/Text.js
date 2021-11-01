import React from "react";

const Text = ({ inline, currency = "", children }) => {
  const Tag = inline ? "span" : "p";

  if (!children) return <Tag className="m-0">-</Tag>;

  if (currency.length && currency === "Euro")
    return (
      <Tag className="text-truncate m-0">
        {children.toLocaleString("de-DE", {
          style: "currency",
          currency: "EUR",
          minimumFractionDigits: 2,
        })}
      </Tag>
    );

  return <p className="text-truncate m-0">{children}</p>;
};

export default Text;
