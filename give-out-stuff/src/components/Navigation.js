import React from "react";
import { Link } from "react-router-dom";

import MenuToScroll from "./MenuToScroll";
const Navigation = () => {
  return (
    <div className="navbar">
      <div className="navbar__log">
        <ul>
          <li>
            <Link to="/loggin">Zaloguj się</Link>
          </li>
          <li>
            <Link to="/register">Załóż konto</Link>
          </li>
        </ul>
      </div>
      <div className="navbar__menu">
        <ul>
          <li className="navbar__menu__start">
            <Link to="/">Start</Link>
          </li>
          <MenuToScroll />
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
