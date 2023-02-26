import React from "react";
import { reviews } from "./db";
import colon from "../Assets/Group 8699.png";
import "../Style/Review.css";

const Review = () => {
  return (
    <div className="customerword">
      <h2 className="customer">Customer's Review</h2>
      <div className="customerreview">
        {reviews.map((review) => {
          const { img, articles, img2, country, name } = review;
          return (
            <div>
              <div className="review">
                <img  className="firstimg" src={img} alt="" />
                <div className="inword">
                  <div>
                    <img src={colon} alt="" />
                  </div>
                  <p className="word">{articles}</p>
                </div>
              </div>
              <div className="nametag">
                <img className="secondimg" src={img2} alt="" />
                <div>
                  <h4>{name}</h4>
                  <p>{country}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Review;
