import React, { useState } from "react";
import "../Style/Why.css";
import { whyimg } from "./db";
import Getmore from "./Getmore";

const Why = () => {
  const [ask, setAsk] = useState(false);
  return (
    <div className="why">
      <h1>Why do people get involved with Cryptocurrencies?</h1>
      <div className="whytext">
        {whyimg.map((yesimg) => {
          const { title, article, img } = yesimg;
          return (
            <div className="whying">
              <div>
                <img className="Bitimg" src={img} alt="" />
                <h2>{title}</h2>
                <p>{article}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="ask">
        {ask && <Getmore />}
        <button onClick={() => setAsk(!ask)}>
          {ask ? "Return" : "Learn More"}
        </button>
      </div>
    </div>
  );
};

export default Why;
