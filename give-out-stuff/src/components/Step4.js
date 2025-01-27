import React from "react";
const Step4 = ({ giveUser, giveAdditional }) => {
  if (typeof giveUser === "function") {
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
              <input
                onChange={giveUser}
                type="text"
                name="street"
                // value={user.street}
              ></input>
            </div>
            <div className="steps__form__4step__address__container">
              <label>Miasto</label>
              <input
                onChange={giveUser}
                type="text"
                name="city"
                // value={user.city}
              ></input>
            </div>
            <div className="steps__form__4step__address__container">
              <label style={{ textAlign: "left" }}>Kod pocztowy</label>
              <input
                onChange={giveUser}
                type="text"
                name="post_code"
                // value={user.post_code}
              ></input>
            </div>
            <div className="steps__form__4step__address__container">
              <label style={{ textAlign: "left" }}>Numer telefonu</label>
              <input
                onChange={giveUser}
                type="text"
                name="number"
                // value={user.number}
              ></input>
            </div>
          </div>
          <div className="steps__form__4step__collection">
            <div className="steps__form__4step__collection__container">
              <label>Data</label>
              <input
                onChange={giveUser}
                type="text"
                name="date"
                // value={user.date}
              ></input>
            </div>
            <div className="steps__form__4step__collection__container">
              <label>Godzina</label>
              <input
                onChange={giveUser}
                type="text"
                name="hour"
                // value={user.hour}
              ></input>
            </div>
            <div
              style={{ alignItems: "flex-start" }}
              className="steps__form__4step__collection__container"
            >
              <label style={{ textAlign: "left" }}>
                Uwagi <br></br> dla kuriera
              </label>
              <textarea
                style={{ width: "62%" }}
                onChange={giveAdditional}
                name="additional"
                // value={additional}
              ></textarea>
            </div>
          </div>
        </form>
      </>
    );
  }
};
export default Step4;
