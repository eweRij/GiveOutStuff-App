import React from "react";
const Step1 = () => {
  return (
    <>
      <h2 className="steps__page">Krok 1/4</h2>
      <h1 className="steps__header">Zaznacz co chcesz oddać:</h1>
      <form className="steps__form">
        <div className="steps__form__radio">
          <input
            type="checkbox"
            name="cloths_secondUse"
            value="cloths_secondUse"
          ></input>
          <label>ubrania, które nadają się do ponownego użycia</label>
        </div>
        <div className="steps__form__radio">
          <input
            type="checkbox"
            name="cloths_throwAway"
            value="cloths_throwAway"
          ></input>
          <label>ubrania, do wyrzucenia</label>
        </div>
        <div className="steps__form__radio">
          <input type="checkbox" name="toys" value="toys"></input>
          <label>zabawki</label>
        </div>
        <div className="steps__form__radio">
          <input type="checkbox" name="books" value="books"></input>
          <label>książki</label>
        </div>
        <div className="steps__form__radio">
          <input type="checkbox" name="else" value="else"></input>
          <label>inne</label>
        </div>
      </form>
    </>
  );
};
export default Step1;
