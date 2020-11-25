import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../UserProvider";
import { auth } from "../firebase";

import MenuToScroll from "./MenuToScroll";
const Navigation = () => {
  const user = useContext(UserContext);

  const activeStyle = {
    border: "0.75px solid $font-color",
    padding: "10px 20px",
  };

  const handleLogout = () => {
    auth
      .signOut()
      .then(function () {
        console.log("wylogowano");
      })
      .catch(function (error) {
        console.log("błąd wylogowania");
      });
  };

  return (
    <div className="navbar container">
      <div className="navbar__log">
        <ul>
          <li>{user ? `${user.email}` : ""}</li>
          <li>
            {user ? (
              <Link onClick={handleLogout} className="link" to="/logout">
                Wyloguj się
              </Link>
            ) : (
              <Link className="link" to="/loggin">
                Zaloguj się
              </Link>
            )}
          </li>
          <li>
            <Link className="link" to="/register">
              Załóż konto
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar__menu">
        <ul>
          <li className="navbar__menu__start">
            <NavLink exact activeStyle={activeStyle} className="link" to="/">
              Start
            </NavLink>
          </li>
          <MenuToScroll />
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
