import React, { useState } from "react";

const Step3 = () => {
  const [city, setCity] = useState("");
  const handleCity = (e) => {
    setCity(e.target.value);
  }; //działa
  const [purpose, setPurpose] = useState([]);

  const handlePurpose = (e) => {
    if (purpose.indexOf(e.target.value) < 0) {
      setPurpose((prev) => [...prev, e.target.value]);
    } else {
      setPurpose((prev) =>
        prev.filter((element) => {
          return element !== e.target.value;
        })
      );
    }
  };

  const [organization, setOrganization] = useState("");
  const handleOrganization = (e) => {
    setOrganization(e.target.value);
  };
  const handleClick = (e) => {
    console.log(e.target.style.backgroundColor);
    if (e.target.style.backgroundColor === "transparent") {
      e.target.style.backgroundColor = "#FAD648";
    } else {
      e.target.style.backgroundColor = "transparent";
    }
  };
  return (
    <>
      <h2 className="steps__page">Krok 3/4</h2>
      <h1 className="steps__header">Lokalizacja:</h1>
      <form className="steps__form">
        <div className="steps__form__select">
          <select onChange={handleCity} value={city}>
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
            onChange={handlePurpose}
            style={{
              width: "150px",
              height: "40px",
              backgroundColor: "transparent",
            }}
            onClick={handleClick}
            type="button"
            name="kids"
            value="dzieciom"
          ></input>
          <input
            onChange={handlePurpose}
            style={{
              width: "150px",
              height: "40px",
              backgroundColor: "transparent",
            }}
            onClick={handleClick}
            type="button"
            name="homeless"
            value="bezdomnym"
          ></input>
          <input
            onChange={handlePurpose}
            style={{
              width: "250px",
              height: "40px",
              backgroundColor: "transparent",
            }}
            onClick={handleClick}
            type="button"
            name="mothers"
            value="samotnym matkom"
          ></input>
          <input
            onChange={handlePurpose}
            style={{
              width: "220px",
              height: "40px",
              backgroundColor: "transparent",
            }}
            onClick={handleClick}
            type="button"
            name="disabled"
            value="niepełnosprawnym"
          ></input>
          <input
            onChange={handlePurpose}
            style={{
              width: "280px",
              height: "40px",
              backgroundColor: "transparent",
            }}
            onClick={handleClick}
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
          onChange={handleOrganization}
          className="organization"
          type="text"
          name="organization"
          value={organization}
        ></input>
      </form>
    </>
  );
};
export default Step3;
