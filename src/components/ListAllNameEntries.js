import React from "react";
import Text from "./Text";

const ListAllNameEntries = ({ list = [] }) => {
  if (!list.length) return null;

  return (
    <ul className="list-group col-6 mt-2 mb-2">
      {list.map(({ name, id }) => (
        <li className="list-group-item d-flex p-0" key={id}>
          <p className="ps-3 pe-3 pt-2 pb-2 m-0 flex-grow-1">
            <Text>{name}</Text>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ListAllNameEntries;
