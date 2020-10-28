import React from "react";
import { Link } from "react-router-dom";
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
          <li>
            <Link to="/">Start</Link>
          </li>
          <li>O co chodzi?</li>
          <li>O nas</li>
          <li>Fundacja i organizacje</li>
          <li>Kontakt</li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
