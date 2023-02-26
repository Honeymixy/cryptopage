import React,{useState} from "react";
import "../Style/StartForm.css";

const StartForm = () => {
  function  individualbtn() {
  console.log('individual form'); 
  }
  return (
    <div className="start">
      <div className="startform">
        <h2>Welcome!</h2>
        <div className="start-ind">
          <button  className="ind" onClick={()=>individualbtn()} >Individual</button> 
          <button className="business">Business</button> 
        </div>
        <form>
          <input type="text" name="Username" id="" placeholder="Username" />
          <input type="text" placeholder="Full Name" name="Full Name" />
          <input type="email" name="Email" id="" placeholder="Email" />
          <input type="text" name="PhoneNumber" id="" placeholder="Phone Number"/>
          <input type="text"name="ReferralCode"id=""placeholder="Referral Code (optional)"/>
          <div className="formtext">
          <p>
            By clicking the Sign Up button below, you agree <br />
            to TradExpress
            <span>terms and service</span>
          </p> 
          </div>
          <button className="signup">Sign Up</button>
          {/* <button type="button" value="Sign Up" /> */}
        </form>
        <p>Already have an account ? <span>Click here</span></p>
        </div>
    </div>
  );
};

export default StartForm;
