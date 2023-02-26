import React from "react";
import "../Style/Navbar.css";
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    
    <div className="nav">
      <h1>TRAdExpress</h1>
      <div className="navbtn">
        <ul>
          <li>Instant Buy/Sell</li>
          <li>Learn</li>
        </ul >
        <button className="loginbtn">Login</button>
        <button className="startbtn"><Link to='/getstart'>Get Started</Link></button>
      </div>
    </div>

  );
};

export default Navbar;
