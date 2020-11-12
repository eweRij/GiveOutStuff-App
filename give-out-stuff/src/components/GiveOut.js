import React, { useState } from "react";
import HomeContact from "./HomeContact";
import Footer from "./Footer";
import Step1 from "./Step1";
const GiveOut = () => {
  const [counter, setCounter] = useState(1);
  const [step, setStep] = useState(<Step1 />);
  const [info, setInfo] = useState(
    "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać."
  );
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
        {step}
        <div className="giveOut__backAndForth">
          <button style={{ display: `${counter > 1 ? "block" : "none"}` }}>
            {counter > 1 ? "Wstecz" : ""}
          </button>
          <button
            style={{
              display: `${counter < 4 && counter >= 1 ? "block" : "none"}`,
            }}
          >
            {counter < 4 && counter >= 1 ? "Dalej" : ""}
          </button>
        </div>
      </section>
      <HomeContact />
      <Footer />
    </>
  );
};
export default GiveOut;
