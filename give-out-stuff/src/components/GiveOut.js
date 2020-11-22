import React, { useState } from "react";
import HomeContact from "./HomeContact";
import Footer from "./Footer";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Thanks from "./Thanks";

const GiveOut = () => {
  const [counter, setCounter] = useState(1);

  const handleForth = () => {
    setCounter((prev) => prev + 1);
  };
  const handleBack = () => {
    setCounter((prev) => prev - 1);
  };
  //co dajemy
  const [what, setWhat] = useState([]);
  const handleWhat = (e) => {
    if (what.indexOf(e.target.value) < 0) {
      setWhat((prev) => [...prev, e.target.value]);
    } else {
      setWhat((prev) =>
        prev.filter((element) => {
          return element !== e.target.value;
        })
      );
    }
  };
  //ile worków
  const [bags, setBags] = useState(0);
  const handleBags = (e) => {
    setBags(e.target.value);
  };
  //jakie miasto
  const [city, setCity] = useState("");
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  //dla kogo
  const [purpose, setPurpose] = useState([]);
  const handlePurpose = (e) => {
    if (purpose.indexOf(e.target.value) < 0) {
      setPurpose((prev) => [...prev, e.target.value]);
    } else {
      setPurpose((prev) =>
        prev.filter((element) => {
          return element !== e.target.value;
        })
      );
    }
    console.log(purpose);
    if (e.target.style.backgroundColor === "transparent") {
      e.target.style.backgroundColor = "#FAD648";
    } else {
      e.target.style.backgroundColor = "transparent";
    }
  };
  //jaka organizacja
  const [organization, setOrganization] = useState("");
  const handleOrganization = (e) => {
    setOrganization(e.target.value);
  };
  //dane adresowe
  const [user, setUser] = useState({
    street: "",
    city: "",
    post_code: "",
    number: "",
    date: "",
    hour: "",
  });
  const handleUser = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  //dodatkowe info dla kuriera
  const [additional, setAdditional] = useState("");
  const handleAdditional = (e) => {
    setAdditional(e.target.value);
  };

  return (
    <>
      <section className="giveOut">
        <div className="giveOut__header">
          <h1>
            Oddaj rzeczy, których już nie chcesz<br></br> POTRZEBUJĄCYM
          </h1>
          <div className="giveOut__header__decor"></div>
          <h2>Wystarczą 4 proste kroki:</h2>
          <div className="giveOut__header__square">
            <div className="giveOut__header__square__border">
              <h1>1</h1>
              <div>
                Wybierz<br></br> rzeczy
              </div>
            </div>
            <div className="giveOut__header__square__border">
              <div>
                2<br></br>Spakuj je <br></br>w worki
              </div>
            </div>
            <div className="giveOut__header__square__border">
              <h1>3</h1>
              <div>
                Wybierz <br></br>fundację
              </div>
            </div>
            <div className="giveOut__header__square__border">
              <h1>4</h1>
              <div>
                Zamów <br></br>kuriera
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ display: `${counter > 4 ? "none" : "block"}` }}
          className="giveOut__information"
        >
          <h1 className="giveOut__information__header">Ważne!</h1>
          <div className="giveOut__information__content">
            {counter === 1 &&
              "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać."}
            {counter === 2 &&
              "Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ."}
            {counter === 3 &&
              "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy."}
            {counter === 4 && "Podaj adres oraz termin odbioru rzeczy."}
          </div>
        </div>
        <div className="steps">
          {counter === 1 && <Step1 giveWhat={handleWhat} />}
          {counter === 2 && <Step2 giveBags={handleBags} />}
          {counter === 3 && (
            <Step3
              giveCity={handleCity}
              givePurpose={handlePurpose}
              giveOrganization={handleOrganization}
            />
          )}
          {counter === 4 && (
            <Step4 giveUser={handleUser} giveAdditional={handleAdditional} />
          )}
          {counter === 5 && (
            <Step5
              what={what}
              bags={bags}
              city={city}
              purpose={purpose}
              organization={organization}
              user={user}
              additional={additional}
            />
          )}
          {counter === 6 && <Thanks />}
          <div className="giveOut__backAndForth">
            <button
              className="giveOut__backAndForth__back"
              onClick={handleBack}
              style={{
                display: `${counter > 1 && counter < 6 ? "block" : "none"}`,
              }}
            >
              Wstecz
            </button>
            <button
              onClick={handleForth}
              className="giveOut__backAndForth__forth"
              style={{
                display: `${counter < 6 ? "block" : "none"}`,
              }}
            >
              {counter === 5 ? "Potwierdzam" : "Dalej"}
            </button>
          </div>
        </div>
      </section>
      <HomeContact />
      <Footer />
    </>
  );
};
export default GiveOut;
