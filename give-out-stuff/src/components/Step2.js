import React from "react";

const Step2 = () => {
  return (
    <>
      <h2 className="steps__page">Krok 2/4</h2>
      <h1 className="steps__header">
        Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
      </h1>
      <form className="steps__form">
        <div className="steps__form__select">
          <label>Liczba 60l worków:</label>
          <select>
            <option value="">— wybierz —</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </form>
    </>
  );
};
export default Step2;
