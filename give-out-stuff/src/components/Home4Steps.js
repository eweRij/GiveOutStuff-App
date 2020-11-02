import React from "react";
import { Link } from "react-router-dom";

const Home4Steps = () => {
  return (
    <section className="home4steps">
      <div className="home4steps__header">
        <h1>Wystarczą 4 proste kroki</h1>
        <div className="home4steps__header__decor"></div>
      </div>
      <div className="home4steps__content">
        <ul>
          <li>
            <div className="home4steps__content__icon firstStep"></div>
            <div className="home4steps__content__title">Wybierz rzeczy</div>
            <span></span>
            <div className="home4steps__content__explanation">
              ubrania, zabawki,<br></br> sprzęt i inne
            </div>
          </li>
          <li>
            <div className="home4steps__content__icon secondStep"></div>
            <div className="home4steps__content__title">Spakuj je</div>
            <span></span>
            <div className="home4steps__content__explanation">
              skorzystaj z<br></br> worków na śmieci
            </div>
          </li>
          <li>
            <div className="home4steps__content__icon thirdStep"></div>
            <div className="home4steps__content__title">
              Zdecyduj komu<br></br> chcesz pomóc
            </div>
            <span></span>
            <div className="home4steps__content__explanation">
              wybierz zaufane<br></br> miejsce
            </div>
          </li>
          <li>
            <div className="home4steps__content__icon fourthStep"></div>
            <div className="home4steps__content__title">Zamów kuriera</div>
            <span></span>
            <div className="home4steps__content__explanation">
              kurier przyjedzie<br></br> w dogodnym terminie
            </div>
          </li>
        </ul>
      </div>
      <div className="home4steps__give-out-navigation ">
        <Link className="link" to="/loggin">
          ODDAJ <br></br> RZECZY
        </Link>
      </div>
    </section>
  );
};

export default Home4Steps;
