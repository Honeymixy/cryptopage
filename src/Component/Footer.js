import React from "react";
import "../Style/Footer.css";
import socicon from "../Assets/Group 79.svg";

const Footer = () => {
  return (
    <div>
    <div className="footer">
      <div className="product">
        <h4>Products</h4>
        <ul>
          <li>Bitcoin</li>
          <li>Alt</li>
          <li>Fiat</li>
          <li>Refill</li>
          <li>P2P</li>
        </ul>
      </div>
      <div className="product">
        <h4>Learn</h4>
        <ul>
          <li>Blog </li>
          <li>Help Center</li>
        </ul>
      </div>
      <div className="product">
        <h4>Contact</h4>
        <ul>
          <li>hello@tradeexpress.com</li>
          <li>support@tradeexpress.com </li>
          <li>
            <img src={socicon} alt="" />{" "}
          </li>
        </ul>
      </div>
      <div className="product">
        <h4>Company</h4>
        <ul>
          <li>About </li>
          <li>Us</li>
          <li>Careers</li>
          <li> Rates </li>
          <li>Mobile</li>
        </ul>
      </div>
      <div className="product">
        <h4>Legal</h4>
        <ul>
          <li>Privacy Policy</li>
          <li>Anti-Money Laundering </li>
          <li>Terms and Conditions</li>
        </ul>
      </div>
      </div>
      <div className="copyright">
      <p>© 2021 TradeExpress Technology All Rights Reserved</p>
      </div>
    </div>
  );      
};

export default Footer;
