import React, { useState } from "react";

const Step3 = () => {
  //   const [checked, setChecked] = useState("transparent");

  const handleClick = (e) => {
    // setChecked((prev) => !prev);
    console.log(e.target.style.backgroundColor);
    // e.target.style.backgroundColor = "pink";
    // e.target.style.backgroundColor = `${
    //   color === "transparent" ? "#FAD648" : "transparent"
    // }`;
    // console.log(color);
    if (e.target.style.backgroundColor === "transparent") {
      e.target.style.backgroundColor = "#FAD648";
    } else {
      e.target.style.backgroundColor = "transparent";
    }
    // if (e.target.style.backgroundColor === "#FAD648") {
    //   e.target.style.backgroundColor = "transparent";
    // }
  };
  return (
    <>
      <h2 className="steps__page">Krok 3/4</h2>
      <h1 className="steps__header">Lokalizacja:</h1>
      <form className="steps__form">
        <div className="steps__form__select">
          <select>
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
          className="organization"
          type="text"
          name="organization"
          value=""
        ></input>
      </form>
    </>
  );
};
export default Step3;