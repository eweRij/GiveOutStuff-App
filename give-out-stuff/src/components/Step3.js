import React from "react";

const Step3 = ({ giveCity, givePurpose, giveOrganization }) => {
  if (typeof giveCity === "function" && typeof givePurpose === "function") {
    return (
      <>
        <h2 className="steps__page">Krok 3/4</h2>
        <h1 className="steps__header">Lokalizacja:</h1>
        <form className="steps__form">
          <div className="steps__form__select">
            <select onChange={giveCity}>
              <option value="">— wybierz —</option>
              <option value="poznań">Poznań</option>
              <option value="warszawa">Warszawa</option>
              <option value="kraków">Kraków</option>
              <option value="wrocław">Wrocław</option>
              <option value="katowice">Katowice</option>
            </select>
          </div>
          <label
            className="steps__header"
            style={{ marginLeft: "0", fontSize: "24px" }}
          >
            Komu chcesz pomóc?
          </label>
          <div className="steps__form__checkbox">
            <input
              // onChange={givePurpose}
              style={{
                width: "150px",
                height: "40px",
                backgroundColor: "transparent",
              }}
              onClick={givePurpose}
              type="button"
              name="kids"
              value="dzieciom"
            ></input>
            <input
              // onChange={givePurpose}
              style={{
                width: "150px",
                height: "40px",
                backgroundColor: "transparent",
              }}
              onClick={givePurpose}
              type="button"
              name="homeless"
              value="bezdomnym"
            ></input>
            <input
              // onChange={givePurpose}
              style={{
                width: "250px",
                height: "40px",
                backgroundColor: "transparent",
              }}
              onClick={givePurpose}
              type="button"
              name="mothers"
              value="samotnym matkom"
            ></input>
            <input
              // onChange={givePurpose}
              style={{
                width: "220px",
                height: "40px",
                backgroundColor: "transparent",
              }}
              onClick={givePurpose}
              type="button"
              name="disabled"
              value="niepełnosprawnym"
            ></input>
            <input
              // onChange={givePurpose}
              style={{
                width: "280px",
                height: "40px",
                backgroundColor: "transparent",
              }}
              onClick={givePurpose}
              type="button"
              name="elderly"
              value="osobom starszym"
            ></input>
          </div>
          <label
            className="steps__header"
            style={{ marginLeft: "0", fontSize: "24px" }}
          >
            Wpisz nazwę konkretnej organizacji (opcjonalnie)
          </label>
          <input
            onChange={giveOrganization}
            className="organization"
            type="text"
            name="organization"
            // value={organization}
          ></input>
        </form>
      </>
    );
  }
};
export default Step3;
