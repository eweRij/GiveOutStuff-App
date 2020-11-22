import React from "react";
const Step1 = ({ giveWhat }) => {
  //działa
  if (typeof giveWhat === "function") {
    return (
      <>
        <h2 className="steps__page">Krok 1/4</h2>
        <h1 className="steps__header">Zaznacz co chcesz oddać:</h1>
        <form className="steps__form">
          <div className="steps__form__radio">
            <input
              onChange={giveWhat}
              type="checkbox"
              name="cloths_secondUse"
              value="ubrania, które nadają się do ponownego użycia"
            ></input>
            <label>ubrania, które nadają się do ponownego użycia</label>
          </div>
          <div className="steps__form__radio">
            <input
              onChange={giveWhat}
              type="checkbox"
              name="cloths_throwAway"
              value="ubrania, do wyrzucenia"
            ></input>
            <label>ubrania, do wyrzucenia</label>
          </div>
          <div className="steps__form__radio">
            <input
              onChange={giveWhat}
              type="checkbox"
              name="toys"
              value="zabawki"
            ></input>
            <label>zabawki</label>
          </div>
          <div className="steps__form__radio">
            <input
              onChange={giveWhat}
              type="checkbox"
              name="books"
              value="książki"
            ></input>
            <label>książki</label>
          </div>
          <div className="steps__form__radio">
            <input
              onChange={giveWhat}
              type="checkbox"
              name="else"
              value="inne"
            ></input>
            <label>inne</label>
          </div>
        </form>
      </>
    );
  }
};
export default Step1;
