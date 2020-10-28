import React from "react";

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
            <h1>ODDAJ </h1>
            <h1>RZECZY</h1>
          </li>
          <li>
            <h1>ZORGANIZUJ</h1>
            <h1>ZBIÓRKĘ</h1>{" "}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default HomeHeader;
