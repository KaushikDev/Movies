import React from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./../../common/constants/menu";
import "./header.scss";
const Header = () => (
  <header className="globalHeader">
    <div className="logo-container">
      <Link className="logo-link" to="/">
        <i class="fa-solid fa-compact-disc"></i>
      </Link>
    </div>
    <div className="menu-container">
      <ul className="global-menu">
        {MenuItems &&
          MenuItems.map((item, id) => (
            <li key={item + id} className="menu-items">
              <Link className="menu-item" to={item.path}>
                {item.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  </header>
);

export default Header;
