import React from "react";
import { Link } from "react-router-dom";
import "../Style/Getstart.css";
import appleicon from "../Assets/icon-apple.png";
import google from "../Assets/Group 53.svg";

const Getstart = () => {
  return (
    <div>
      <div className="getstart">
        <div>
          <p>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</p>
          <h1>Create your account for free and start trading today!</h1>
        </div>
        <button className="startbnt"><Link to='/getstart' style={{color:'white'}}>Get Started</Link></button>
      </div>
      <div className="playstore">
        <button className="applelogo">
          <div className="logo">
            <div>
              <img src={appleicon} alt="" />
            </div>
            <div className="download">
              <p>Download on the</p>
              <h5>App Store</h5>
            </div>
          </div>
        </button>
        <button className="gogglelogo">
          <div className="logo">
            <img src={google} alt="" />
            <div className="download">
              <p>Get on</p>
              <h5>Google Play</h5>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Getstart;
