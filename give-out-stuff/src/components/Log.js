import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { UserContext } from "../UserProvider";

const Log = () => {
  const user = useContext(UserContext);
  if (user) {
    console.log(user.email);
  }
  const [log, setLog] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

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
    } else if (log.email.indexOf("@") > 0 && log.password.length > 6) {
      setEmailError("");
      auth
        .signInWithEmailAndPassword(log.email, log.password) //logowanie z firebase
        .then((user) => {
          console.log(user);
        })
        .catch((error) => {
          let errorCode = error.code;
          console.log(errorCode);
          let errorMessage = error.message;
          console.log(errorMessage);
          alert(errorMessage);
        });
    }
  };
  return (
    <section className="loggin">
      <h1 className="loggin__header">Zaloguj się</h1>
      <div className="loggin__decor"></div>
      <form onSubmit={handleSubmit} className="loggin__form">
        <div className="loggin__form__container">
          <div className="loggin__form__container__login">
            <label>Login</label>
            <input
              onChange={handleChange}
              type="text"
              name="email"
              value={log.email}
              style={{ borderBottom: `${emailError && "1px solid red"}` }}
            ></input>
            <div
              className="error"
              style={{ textAlign: "center", width: "100%", right: "22%" }}
            >
              {emailError}
            </div>
          </div>
          <div className="loggin__form__container__password">
            <label>Hasło</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={log.password}
              style={{ borderBottom: `${passwordError && "1px solid red"}` }}
            ></input>
            <div
              className="error"
              style={{ textAlign: "center", width: "100%", right: "26%" }}
            >
              {passwordError}
            </div>
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
