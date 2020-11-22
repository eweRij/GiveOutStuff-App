import React from "react";
const Step5 = ({
  what,
  bags,
  city,
  purpose,
  organization,
  user,
  additional,
}) => {
  return (
    <>
      <h1 className="steps__header">Podsumowanie Twojej darowizny:</h1>
      <div className="steps__summary">
        <div className="steps__summary__what">
          <h2>Oddajesz</h2>
          <div>
            <div className="steps__summary__what__img clothes"></div>
            {bags} {bags === 1 && "worek"} {bags > 1 && bags < 5 && "worki"}{" "}
            {bags > 4 && "worków"},
            {what.map((element) => {
              return `${element}, `;
            })}
            {purpose.map((element) => {
              return `${element}, `;
            })}
            {organization && ` ${organization}`}
          </div>
          <div>
            <div className="steps__summary__what__img localization"></div>dla
            lokalizacji : {city}
          </div>
        </div>
        <div className="steps__summary__when-where">
          <div className="steps__summary__when-where__where">
            <h2>Adres odbioru</h2>
            <div>
              <span>Ulica: </span>
              <span>{user.street}</span>
            </div>
            <div>
              <span>Miasto: </span>
              <span>{user.city}</span>
            </div>
            <div>
              <span>Kod pocztowy: </span>
              <span>{user.post_code}</span>
            </div>
            <div>
              <span>Numer telefonu: </span>
              <span>{user.number}</span>
            </div>
          </div>
          <div className="steps__summary__when-where__when">
            <h2>Termin odbioru</h2>
            <div>
              <span>Data: </span>
              <span>{user.date}</span>
            </div>
            <div>
              <span>Godzina: </span>
              <span>{user.hour}</span>
            </div>
            <div>
              <span>
                Uwagi <br></br>dla kuriera:
              </span>
              <span>{additional}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Step5;
