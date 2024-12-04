import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import logo1 from "../../Assets/images/main-logo.png";


const Navbar = () => {
  return (
    <>
      <div className="main-page">
        <nav id="navbar">
          <img className="logo" src={logo1}/>
          

          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/post-job">Post Job</Link>
            </li>
            <li>
              <Link to="#" className="login">Login</Link>
              <ul>
                <li>
                <Link to="#">Student Login</Link>
                </li>
                <li>
                <Link to="#">Employer Login</Link>
                </li>
                <li>
                <Link to="#">Admin Login</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
