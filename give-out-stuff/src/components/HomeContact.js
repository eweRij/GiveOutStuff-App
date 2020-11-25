import React, { useState } from "react";

const HomeContact = () => {
  const [user, setUser] = useState({
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
    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send(
        "service_p19ukoi",
        templateId,
        variables,
        "user_n3xoIvObZaxG1DfOfz5nX"
      )
      .then((res) => {
        alert("Wiadomość została wysłana");
      })
      .catch((err) =>
        alert(
          "Coś poszło nie tak! Spróbuj jeszcze raz lub skontaktuj się z nami",
          err
        )
      );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let space = " ";
    if (user.name.indexOf(space) > 0) {
      setErrorName("Podane imię jest nieprawidłowe!");
    } else {
      setErrorName("");
    }
    if (user.email.indexOf("@") < 0) {
      setErrorEmail("Podany email jest nieprawidłowy!");
    } else {
      setErrorEmail("");
    }
    if (user.email.indexOf("@") > 0 && user.name.indexOf(space) < 0) {
      const templateId = "template_4yxy8fa";
      sendFeedback(templateId, {
        from_name: user.name,
        reply_to: user.email,
        message: user.message,
      });
    }

    if (user.message.length < 120) {
      setErrorMessage("Twoja wiadomość powinna mieć conajmniej 120 znaków");
    } else {
      setErrorMessage("");
    }

    if (
      user.name.indexOf(space) < 0 &&
      user.email.indexOf("@") > 0 &&
      user.message.length >= 120
    ) {
      fetch(API, {
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
      setConfirm(
        <>
          <h1>Wiadomość została wysłana!</h1>
          <h1>Wkrótce się z Tobą skontaktujemy!</h1>
        </>
      );
      setUser({ name: "", email: "", message: "" });
    } else {
      setConfirm("");
    }
  };

  return (
    <section className="contact">
      <div className="contact__image"></div>
      <div className="contact__info">
        <h1 className="contact__info__header">Skontaktuj się z nami</h1>
        <div className="contact__info__decor"></div>
        <div className="contact__info__confirmation confirm">{confirm}</div>
        <form onSubmit={handleSubmit} className="contact__info__form">
          <div className="contact__info__form__personalData">
            <div className="contact__info__form__personalData__name">
              <label>Wpisz swoje imię</label>
              <input
                style={{ borderBottom: `${errorName && "1px solid red"}` }}
                onChange={handleChange}
                type="text"
                name="name"
                value={user.name}
              ></input>
              <div className="error">{errorName}</div>
            </div>
            <div className="contact__info__form__personalData__email">
              <label>Wpisz swojego maila</label>
              <input
                style={{ borderBottom: `${errorEmail && "1px solid red"}` }}
                onChange={handleChange}
                type="text"
                name="email"
                value={user.email}
              ></input>
              <div className="error">{errorEmail}</div>
            </div>
          </div>
          <div className="contact__info__form__textarea">
            <label>Wpisz swoją wiadomość</label>
            <textarea
              style={{ borderBottom: `${errorMessage && "1px solid red"}` }}
              onChange={handleChange}
              name="message"
              value={user.message}
            ></textarea>
            <div className="textareaError">{errorMessage}</div>
          </div>

          <input className="submit" type="submit" value="Wyślij"></input>
        </form>
      </div>
    </section>
  );
};

export default HomeContact;
