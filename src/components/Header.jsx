import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";

function Header() {
  return (
    <header>
      <h1>
        <HighlightIcon />
        Notes : {process.env.REACT_APP_SECRET_CODE}
      </h1>
    </header>
  );
}

export default Header;
