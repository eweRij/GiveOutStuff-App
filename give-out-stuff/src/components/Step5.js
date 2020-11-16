import React from "react";
const Step5 = () => {
  return (
    <>
      <h1 className="steps__header">Podsumowanie Twojej darowizny:</h1>
      <div className="steps__summary">
        <div className="steps__summary__what">
          <h2>Oddajesz</h2>
          <div>
            <span></span>...
          </div>
          <div>
            <span></span>...
          </div>
        </div>
        <div className="steps__summary__when-where">
          <div className="steps__summary__when-where__where">
            <h2>Adres odbioru</h2>
            <div>
              <span>Ulica</span>
              <span>...</span>
            </div>
            <div>
              <span>Miasto</span>
              <span>...</span>
            </div>
            <div>
              <span>Kod pocztowy</span>
              <span>...</span>
            </div>
            <div>
              <span>Numer telefonu</span>
              <span>...</span>
            </div>
          </div>
          <div className="steps__summary__when-where__when">
            <h2>Termin odbioru</h2>
            <div>
              <span>Data</span>
              <span>...</span>
            </div>
            <div>
              <span>Godzina</span>
              <span>...</span>
            </div>
            <div>
              <span>
                Uwagi <br></br>dla kuriera
              </span>
              <span>...</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Step5;
