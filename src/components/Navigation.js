import React from "react";
import { useLocation } from "react-router-dom";
import cx from "classnames";

import { GiPostStamp } from "react-icons/gi";
import {
  AiOutlineInbox,
  AiOutlineIdcard,
  AiOutlineSetting,
} from "react-icons/ai";

const Navigation = ({ profile }) => {
  const { pathname } = useLocation();

  return (
    <nav
      className="bg-light position-relative pt-4"
      style={{ height: "100%", width: "240px", background: "#F8F9FA" }}
    >
      <h1 className="position-relative ps-3 pe-3">
        <span
          className="position-absolute"
          style={{ right: "10px", top: "-15px" }}
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
      </ul>

      {profile === "admin" ? (
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item ps-3 pe-3" style={{ lineHeight: "26px" }}>
            <a
              href="/config"
              className={cx([
                "nav-link",
                pathname === "/config" ? "active" : "link-dark",
              ])}
            >
              <AiOutlineSetting className="me-3" />
              Einstellungen
            </a>
          </li>
        </ul>
      ) : null}
    </nav>
  );
};

export default Navigation;
