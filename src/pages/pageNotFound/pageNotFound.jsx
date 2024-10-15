import React from "react";
import "./pageNotFound.scss";
import GoHome from "../../components/goHome/goHome";

const PageNotFound = () => (
  <div className="pageNotFound">
    <i className="fa-regular fa-face-grin-tongue"></i>Sorry, we haven't built
    this page yet.
    <GoHome />
  </div>
);

export default PageNotFound;
