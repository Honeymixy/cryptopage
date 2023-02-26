import React from "react";
import '../Style/Why.css';
import { whyimg } from "./db";

const Getmore = () => {
  return (
    <div className="why">
      <div className="whytext">
        {whyimg.map((yesimg) => {
          const { title, article,img } = yesimg;
          return (
            <div className="whying">
              <img className="Bitimg" src={img} alt="" />
              <h2>{title}</h2>
              <p>{article}</p>
            </div>
            
          );
        })}
      </div>
    </div>
  );
};

export default Getmore;
