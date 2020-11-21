import React, { useState } from "react";
const Step1 = () => {
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
  }; //działa
  return (
    <>
      <h2 className="steps__page">Krok 1/4</h2>
      <h1 className="steps__header">Zaznacz co chcesz oddać:</h1>
      <form className="steps__form">
        <div className="steps__form__radio">
          <input
            onChange={handleWhat}
            type="checkbox"
            name="cloths_secondUse"
            value="ubrania, które nadają się do ponownego użycia"
          ></input>
          <label>ubrania, które nadają się do ponownego użycia</label>
        </div>
        <div className="steps__form__radio">
          <input
            onChange={handleWhat}
            type="checkbox"
            name="cloths_throwAway"
            value="ubrania, do wyrzucenia"
          ></input>
          <label>ubrania, do wyrzucenia</label>
        </div>
        <div className="steps__form__radio">
          <input
            onChange={handleWhat}
            type="checkbox"
            name="toys"
            value="zabawki"
          ></input>
          <label>zabawki</label>
        </div>
        <div className="steps__form__radio">
          <input
            onChange={handleWhat}
            type="checkbox"
            name="books"
            value="książki"
          ></input>
          <label>książki</label>
        </div>
        <div className="steps__form__radio">
          <input
            onChange={handleWhat}
            type="checkbox"
            name="else"
            value="inne"
          ></input>
          <label>inne</label>
        </div>
      </form>
    </>
  );
};
export default Step1;
