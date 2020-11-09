import React from "react";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <section className="logout">
      <h1 className="logout__header">
        Wylogowanie nastąpiło <br></br> pomyślnie!
      </h1>
      <div className="logout__decor"></div>
      <Link to="/" className="logout__navigation link">
        Strona główna
      </Link>
    </section>
  );
};

export default Logout;
