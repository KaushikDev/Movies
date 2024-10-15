import React from "react";
import { Link } from "react-router-dom";
import "./goHome.scss";

const GoHome = () => {
  return (
    <Link className="HOME_LINK" to="">
      Click to go <i class="fa-solid fa-house-chimney"></i>
    </Link>
  );
};

export default GoHome;
