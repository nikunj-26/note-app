import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>
        Copyright ⓒ {year} {process.env.REACT_APP_NOT_SECRET_CODE}
      </p>
    </footer>
  );
}

export default Footer;
