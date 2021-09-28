import React from "react";
import { useLocation } from "react-router-dom";
import cx from "classnames";

import { GiPostStamp } from "react-icons/gi";
import {
  AiOutlineInbox,
  AiOutlineIdcard,
  AiOutlineDelete,
} from "react-icons/ai";

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <nav
      className="bg-light position-relative pt-4"
      style={{ height: "100vh" }}
    >
      <h1 className="position-relative ps-3 pe-3">
        <span
          className="position-absolute"
          style={{ right: "0", top: "-15px" }}
        >
          <GiPostStamp />
        </span>
        Postbuch
      </h1>

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item pt-5 ps-3 pe-3" style={{ lineHeight: "26px" }}>
          <a
            href="/inbox"
            role="button"
            className={cx([
              "nav-link",
              pathname === "/inbox" ? "active" : "link-dark",
            ])}
          >
            <AiOutlineInbox className="me-3" />
            Eingang
          </a>
        </li>
        <li className="nav-item ps-3 pe-3" style={{ lineHeight: "26px" }}>
          <a
            href="/outbox"
            className={cx([
              "nav-link",
              pathname === "/outbox" ? "active" : "link-dark",
            ])}
          >
            <AiOutlineIdcard className="me-3" />
            Ausgang
          </a>
        </li>

        <li className="nav-item ps-3 pe-3" style={{ lineHeight: "26px" }}>
          <a
            href="/trash"
            role="button"
            className={cx([
              "nav-link",
              pathname === "/trash" ? "active" : "link-dark",
            ])}
          >
            <AiOutlineDelete className="me-3" />
            Papierkorb
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
