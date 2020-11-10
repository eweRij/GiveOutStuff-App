import React from "react";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <header className="header">
      <div className="header__title">
        <h1>Zacznij pomagać!</h1>
        <h1> Oddaj niechciane rzeczy w zaufane ręce</h1>
        <div className="header__title__decor"></div>
      </div>
      <div className="header__navigation">
        <ul>
          <li>
            <Link className="link" to="loggin">
              <h1>ODDAJ </h1>
              <h1>RZECZY</h1>
            </Link>
          </li>
          <li>
            <Link className="link" to="register">
              <h1>ZORGANIZUJ</h1>
              <h1>ZBIÓRKĘ</h1>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default HomeHeader;
