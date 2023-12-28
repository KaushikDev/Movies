import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
const Header = () => (
  <header className="globalHeader">
    <div className="logo-container">
      <Link className="logo-link" to="/">
        <i className="fa-solid fa-tape"></i>
      </Link>
    </div>
    <div className="menu-container">
      <ul className="global-menu">
        <li className="menu-items">
          <Link className="menu-item" to="/watchlist">Watchlist</Link>
        </li>
        <li className="menu-items">
          <Link className="menu-item" to="/favorites">Favorites</Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
