import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuItems } from "./../../common/constants/menu";
import "./header.scss";
const Header = () => {
  const { pathname } = useLocation();
  const highlightSelectedMenuItem = (
    currPath,
    pagePath,
    normalClass,
    highlightedClass
  ) => {
    return currPath === pagePath ? highlightedClass : normalClass;
  };

  return (
    <header className="globalHeader">
      <div className="logo-container">
        <Link className="logo-link" to="/">
          <i className="fa-solid fa-compact-disc"></i>
        </Link>
      </div>
      <div className="menu-container">
        <ul className="global-menu">
          {MenuItems &&
            MenuItems.map((item, id) => (
              <li key={item + id} className="menuItems">
                <Link
                  className={highlightSelectedMenuItem(
                    pathname,
                    item.path,
                    "menuItem",
                    "menuItemSelected"
                  )}
                  to={item.path}
                >
                  {item.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
