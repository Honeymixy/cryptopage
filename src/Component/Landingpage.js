import React from "react";
import "../Style/Landingpage.css";
import appleicon from '../Assets/Group 68.svg'
import google from '../Assets/Group 69.svg'
import Home from "./Home";
import Why from "./Why";
import Simple from "./Simple";
import Getstart from "./Getstart";
import Review from "./Review";
import Footer from "./Footer";
import { Link } from "react-router-dom";



const Landingpage = () => {
  return (
    <div>
    <div className="landpage">
      <div>
        <div className="cricle"></div>
        <div className="innerCircle"></div>
        <div className="text">
          <h1 className="textfrst">Buy, sell and manage your Crypto on TradExpress.</h1>
          <div>
          <p>
            Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP with
            NGN.
          </p>
          <button className="getbtn"><Link to='./getstart'>Get Started</Link> </button>
          <div></div>
          <div className="icons">
            <img src={appleicon} alt="" />
            <img src={google} alt="" />
          </div>
          </div>
        </div>
      </div>
    </div>
    <Home/>
    <Why/>
    <Simple/>
    <Getstart/>
    <Review/>
    <Footer/>
  </div>
  );
};

export default Landingpage;
