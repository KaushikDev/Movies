import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => (
  <footer className="globalFooter">
    <h5>
      &copy; {new Date().getFullYear()}{" "}
      <Link className="footerlink" to="kaushikdev.com">
        kaushikDevCodes
      </Link>
      . All rights reserved.
    </h5>
  </footer>
);

export default Footer;
