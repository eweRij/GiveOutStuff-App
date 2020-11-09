import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <section className="registration">
      <h1 className="registration__header">Załóż konto</h1>
      <div className="registration__decor"></div>
      <form className="registration__form">
        <div className="registration__form__container">
          <div className="registration__form__container__login">
            <label>Email</label>
            <input type="text"></input>
          </div>
          <div className="registration__form__container__password">
            <label>Hasło</label>
            <input type="password"></input>
            <label>Powtórz hasło</label>
            <input type="password"></input>
          </div>
        </div>
        <div className="registration__form__links">
          <Link className="link" to="/loggin">
            Zaloguj się
          </Link>
          <input type="submit" value="Załóż konto"></input>
        </div>
      </form>
    </section>
  );
};

export default Registration;
