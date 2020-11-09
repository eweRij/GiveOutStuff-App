import React, { useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  const [log, setLog] = useState({
    email: "",
    password: "",
    checkPassword: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [checkPasswordError, setCheckPassword] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setLog((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (log.password.length < 6) {
      setPasswordError("Podane hasło jest za krótkie!");
      console.log(passwordError);
    } else if (log.password.length > 6) {
      setPasswordError("");
    }
    if (log.email.indexOf("@") < 0) {
      setEmailError("Podany email jest nieprawidłowy!");
      console.log(emailError);
    } else if (log.email.indexOf("@") > 0) {
      setEmailError("");
    }
    if (log.checkPassword !== log.password && log.checkPassword.length < 6) {
      setCheckPassword("Podane hasła nie są identyczne!");
    } else if (
      log.checkPassword === log.password &&
      log.checkPassword.length > 6
    ) {
      setCheckPassword("");
    }
  };
  return (
    <section className="registration">
      <h1 className="registration__header">Załóż konto</h1>
      <div className="registration__decor"></div>
      <form onSubmit={handleSubmit} className="registration__form">
        <div className="registration__form__container">
          <div className="registration__form__container__login">
            <label>Email</label>
            <input
              onChange={handleChange}
              type="text"
              name="email"
              style={{ borderBottom: `${emailError && "2px solid red"}` }}
            ></input>
            <div
              className="error"
              style={{ textAlign: "center", width: "100%", right: "22%" }}
            >
              {emailError}
            </div>
          </div>
          <div className="registration__form__container__password">
            <label>Hasło</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              style={{ borderBottom: `${passwordError && "2px solid red"}` }}
            ></input>
            <div
              className="error"
              style={{
                textAlign: "center",
                width: "100%",
                right: "26%",
                top: "50%",
              }}
            >
              {passwordError}
            </div>
            <label>Powtórz hasło</label>
            <input
              onChange={handleChange}
              type="password"
              name="checkPassword"
              style={{
                borderBottom: `${checkPasswordError && "2px solid red"}`,
              }}
            ></input>
            <div
              className="error"
              style={{ textAlign: "center", width: "100%", right: "23%" }}
            >
              {checkPasswordError}
            </div>
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
