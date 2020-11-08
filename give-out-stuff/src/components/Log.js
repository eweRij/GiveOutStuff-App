import React from "react";
import { Link } from "react-router-dom";

const Log = () => {
  return (
    <section className="loggin">
      <h1 className="loggin__header">Zaloguj się</h1>
      <div className="loggin__decor"></div>
      <form className="loggin__form">
        <div className="loggin__form__container">
          <div className="loggin__form__container__login">
            <label>Login</label>
            <input type="text"></input>
          </div>
          <div className="loggin__form__container__password">
            <label>Hasło</label>
            <input type="password"></input>
          </div>
        </div>
        <div className="loggin__form__links">
          <Link className="link" to="/register">
            Zarejestruj się
          </Link>
          <input type="submit" value="Zaloguj się"></input>
        </div>
      </form>
    </section>
  );
};

export default Log;
