import React from "react";
import { Link } from "react-router-dom";

const Step1 = () => {
  return (
    <section className="step1">
      <h2 step1__page>Krok 1/4</h2>
      <h1 className="step1__header">Zaznacz co chcesz oddać:</h1>
      <form>
        <div>
          <input
            type="checkbox"
            name="cloths_secondUse"
            value="cloths_secondUse"
          ></input>
          <label>ubrania, które nadają się do ponownego użycia</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="cloths_throwAway"
            value="cloths_throwAway"
          ></input>
          <label>ubrania, do wyrzucenia</label>
        </div>
        <div>
          <input type="checkbox" name="toys" value="toys"></input>
          <label>zabawki</label>
        </div>
        <div>
          <input type="checkbox" name="books" value="books"></input>
          <label>książki</label>
        </div>
        <div>
          <input type="checkbox" name="else" value="else"></input>
          <label>inne</label>
        </div>
      </form>
      <div className>
        <Link to="/"></Link>
      </div>
    </section>
  );
};
export default Step1;
