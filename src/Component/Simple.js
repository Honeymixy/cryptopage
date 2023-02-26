import React from "react";
import "../Style/Simple.css";
import group52 from "../Assets/Group 52.svg";
import group28 from "../Assets/Group 28.svg";

const Simple = () => {
  return (
    <div className="simple">
      <h1 className="buy">
        Buy and Sell your Cryptocurrency in 3 simple steps
      </h1>
      <div className="explain" id="explainone" key={1}>
        <div>
          <div className="numb">
            <p className="no">1</p>
            <h2>Create a free Account</h2>
          </div>
          <p className="simtext">Buy and Sell your Cryptocurrency in 3 simple steps</p>
        </div>
        <img src={group52} alt="" />
      </div>
      <div className="explain" id="explaintwo" key={2}>
        <img src={group52} alt="" />
        <div>
          <div className="numb">
            <p className="no">2</p>
            <h2>Deposit</h2>
          </div>
          <p className="simtext">
            Choose your preferred deposit option like bank transfer,
            credit/debit card or <br /> send digital asset directly to your
            wallet for easy funding/withdrawal.
          </p>
        </div>
      </div>
      <div className="explain" id="explainthree" key={3}>
        <div>
          <div className="numb">
            <p className="no">3</p>
            <h2>Buy/ Sell Crypto</h2>
          </div>
          <p className="simtext">
            Buy BTC, USDT, ETH, LTC, XRP, DOGE and securely store it <br /> in
            your wallet or send it easily to friends and family.
          </p>
        </div>
        <img className="threeimg" src={group28} alt="" />
      </div>
    </div>
  );
};

export default Simple;
