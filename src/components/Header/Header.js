import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header">
      <div className="header__body">
        <nav className="header__menu">
          <Link to="/" className="header__link">
            Главная
          </Link>
          <Link to="/dictionary" className="header__link">
            Справочники
          </Link>
          <Link to="/about" className="header__link">
            Описание
          </Link>
        </nav>
        {localStorage.length > 0 ? (
          <div className="header__out" onClick={props.outLogin}>
            Выйти
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
