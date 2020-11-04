import React, { useEffect, useState, useContext } from "react";

const HomeHelp = () => {
  let component = (
    <div className="helpWho__content__description">
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br></br>{" "}
        do eiusmod tempor incididunt ut labore et dolore magna <br></br> aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation.
      </div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
  const [content, setContent] = useState(component);
  return (
    <section className="helpWho">
      <h1 className="helpWho__heading">Komu pomagamy?</h1>
      <div className="helpWho__decor"></div>
      <ul className="helpWho__navigation">
        <li>Fundacjom</li>
        <li>Organizacjom pozrządowym</li>
        <li>Lokalnym zbiórkom</li>
      </ul>
      <div className="helpWho__content">{content}</div>
    </section>
  );
};

export default HomeHelp;
