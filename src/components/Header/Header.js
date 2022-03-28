import React from "react";
import { Link } from "react-router-dom";
import text from "./assets/text.json";
import siteMap from "../../siteMap/config.json";

export const Header = () => {
  const handleLoginOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="header">
      <div className="header__body">
        <nav className="header__menu">
          <Link to={siteMap.mainPage.path} className="header__link">
            {siteMap.mainPage.name}
          </Link>
          <Link to={siteMap.dictionary.path} className="header__link">
            {siteMap.dictionary.name}
          </Link>
          <Link to={siteMap.about.path} className="header__link">
            {siteMap.about.name}
          </Link>
        </nav>
        {localStorage.length > 0 ? (
          <div className="header__out" onClick={handleLoginOut}>
            {text.outButton}
          </div>
        ) : (
          <a href={siteMap.login.path} className="header__out">
            {text.loginButton}
          </a>
        )}
      </div>
    </div>
  );
};
