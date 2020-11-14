import React from "react";

const Step2 = () => {
  return (
    <div className="step2">
      <h2 style={{ marginTop: "10vh" }} className="steps__page">
        Krok 2/4
      </h2>
      <h1 style={{ marginTop: "10vh" }} className="steps__header">
        Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
      </h1>
      <form style={{ marginTop: "10vh" }} className="steps__form">
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
    </div>
  );
};
export default Step2;
