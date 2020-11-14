import React, { useState } from "react";
import HomeContact from "./HomeContact";
import Footer from "./Footer";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const GiveOut = () => {
  const [counter, setCounter] = useState(1);
  const [step, setStep] = useState(<Step1 />);
  const [info, setInfo] = useState(
    "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać."
  );

  const handleForth = () => {
    setCounter((prev) => prev + 1);
    if (counter === 2) {
      setStep(<Step2 />);
    }
    setInfo(
      "Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ."
    );
    if (counter === 3) {
      setStep(<Step3 />);
      setInfo(
        "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy."
      );
    }
  };
  console.log(counter);
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
        <div className="giveOut__information">
          <h1 className="giveOut__information__header">Ważne!</h1>
          <div className="giveOut__information__content">{info}</div>
        </div>
        <div className="steps">
          {step}
          <div className="giveOut__backAndForth">
            <button
              className="giveOut__backAndForth__back"
              style={{ display: `${counter > 1 ? "block" : "none"}` }}
            >
              Wstecz
            </button>
            <button
              onClick={handleForth}
              className="giveOut__backAndForth__forth"
              style={{
                display: `${counter < 4 ? "block" : "none"}`,
              }}
            >
              Dalej
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
