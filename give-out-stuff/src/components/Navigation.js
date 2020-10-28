import React from "react";
const Navigation = () => {
  return (
    <div className="navbar">
      <div className="navbar__log">
        <ul>
          <li>Zaloguj się</li>
          <li>Załóż konto</li>
        </ul>
      </div>
      <div className="navbar__menu">
        <ul>
          <li>Start</li>
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
