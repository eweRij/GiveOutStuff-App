import React, { useState } from "react";

const HomeContact = () => {
  const [user, setForm] = useState({
    name: "Ewelina",
    email: "zaizaier@op.pl",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  });
  const API = "https://fer-api.coderslab.pl/v1/portfolio/contact";
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [confirm, setConfirm] = useState("");
  const newQuestion = {
    name: user.name,
    email: user.email,
    message: user.message,
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  console.log(user.name, user.email, user.message);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name.indexOf(" ") > 0 && user.name.length <= 0) {
      setErrorName("Podane imię jest nieprawidłowe!" && user.email.length <= 0);
    } else if (user.email.indexOf("@" < 0)) {
      setErrorEmail("Podany email jest nieprawidłowy!");
    } else if (user.message.length < 120) {
      setErrorMessage("Twoja wiadomość powinna mieć conajmniej 120 znaków");
    } else {
      fetch(" https://fer-api.coderslab.pl/v1/exam5/contact", {
        method: "POST",
        body: JSON.stringify(newQuestion),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
      setConfirm("Wiadomość została wysłana!Wkrótce się z Tobą skontaktujemy!");
    }
  };

  return (
    <section className="contact">
      <div className="contact__image"></div>
      <div className="contact__info">
        <h1 className="contact__info__header">Skontaktuj się z nami</h1>
        <div className="contact__info__decor"></div>
        <div className="contact__info__confirmation">{confirm}</div>
        <form onSubmit={handleSubmit} className="contact__info__form">
          <div className="contact__info__form__personalData">
            <div className="contact__info__form__personalData__name">
              <label>Wpisz swoje imię</label>
              <input
                onChange={handleChange}
                type="text"
                name="name"
                value={user.name}
              ></input>
              <div>{errorName}</div>
            </div>
            <div className="contact__info__form__personalData__email">
              <label>Wpisz swojego maila</label>
              <input
                onChange={handleChange}
                type="text"
                name="email"
                value={user.email}
              ></input>
              <div>{errorEmail}</div>
            </div>
          </div>
          <label>Wpisz swoją wiadomość</label>
          <textarea
            onChange={handleChange}
            name="message"
            value={user.message}
          ></textarea>
          <div>{errorMessage}</div>
          <input className="submit" type="submit" value="Wyślij"></input>
        </form>
      </div>
    </section>
  );
};

export default HomeContact;
