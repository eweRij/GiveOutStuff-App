import React, { useState } from "react";
import Footer from "./Footer";

const HomeContact = () => {
  const [name, setName] = useState("Ewelina");
  const [email, setEmail] = useState("zaizaier@op.pl");
  let placeholder =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <section className="contact">
      <div className="contact__image"></div>
      <div className="contact__info">
        <h1 className="contact__info__header">Skontaktuj się z nami</h1>
        <div className="contact__info__decor"></div>
        <form className="contact__info__form">
          <div className="contact__info__form__personalData">
            <div className="contact__info__form__personalData__name">
              <label>Wpisz swoje imię</label>
              <input type="text" name="name" value={name}></input>
            </div>
            <div className="contact__info__form__personalData__email">
              <label>Wpisz swojego maila</label>
              <input type="text" name="email" value={email}></input>
            </div>
          </div>
          <label>Wpisz swoją wiadomość</label>
          <textarea value={placeholder}></textarea>
          <input className="submit" type="submit" value="Wyślij"></input>
        </form>
      </div>
      {/* <Footer /> */}
    </section>
  );
};

export default HomeContact;
