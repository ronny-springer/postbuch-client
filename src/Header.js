import React from "react";
import { MdLocalPostOffice } from "react-icons/md";

const Header = () => {
  return (
    <header class="row py-2 px-5 mb-4 fs-4">
      <div class="d-flex align-items-center">
        <MdLocalPostOffice />
        Postbuch
      </div>
    </header>
  );
};

export default Header;
