import React from "react";
const Step4 = () => {
  return (
    <>
      <h2 className="steps__page">Krok 4/4</h2>
      <h1 className="steps__header">
        Podaj adres oraz termin odbioru rzecz przez kuriera:
      </h1>
      <form className="steps__form__4step">
        <div className="steps__form__4step__address">
          <div className="steps__form__4step__address__container">
            <label>Ulica</label>
            <input type="text" name="street" value=""></input>
          </div>
          <div className="steps__form__4step__address__container">
            <label>Miasto</label>
            <input type="text" name="city" value=""></input>
          </div>
          <div className="steps__form__4step__address__container">
            <label style={{ textAlign: "left" }}>Kod pocztowy</label>
            <input type="text" name="post_code" value=""></input>
          </div>
          <div className="steps__form__4step__address__container">
            <label style={{ textAlign: "left" }}>Numer telefonu</label>
            <input type="text" name="number" value=""></input>
          </div>
        </div>
        <div className="steps__form__4step__collection">
          <div className="steps__form__4step__collection__container">
            <label>Data</label>
            <input type="text" name="street" value=""></input>
          </div>
          <div className="steps__form__4step__collection__container">
            <label>Godzina</label>
            <input type="text" name="street" value=""></input>
          </div>
          <div
            style={{ alignItems: "flex-start" }}
            className="steps__form__4step__collection__container"
          >
            <label style={{ textAlign: "left" }}>
              Uwagi <br></br> dla kuriera
            </label>
            <textarea name="street" value=""></textarea>
          </div>
        </div>
      </form>
    </>
  );
};
export default Step4;
