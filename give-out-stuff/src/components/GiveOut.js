import React from "react";

import HomeContact from "./HomeContact";
import Footer from "./Footer";
const GiveOut = () => {
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
          <div className="giveOut__information__content">
            Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
            wiedzieć komu najlepiej je przekazać.
          </div>
        </div>
      </section>
      <HomeContact />
      <Footer />
    </>
  );
};
export default GiveOut;
