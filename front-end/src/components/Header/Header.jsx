/*import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../images/logo (1).png';

const Header = () => {
  const handleLogout = () => {
    // Logic for logging out the user
    console.log("User logged out");
  };

  return (
    <div className={styles.header}>
      <img src={logo} alt="Evangadi Forum Logo" />{" "}
      <nav>
        <ul>
           <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/How it works">How it works</Link>
          </li>
           <li>
            {" "}
            <Link to="/SignIn">SignIn</Link>
          </li>
          <li>
            <Link to="/logout" onClick={handleLogout}>
              LogOut
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;*/









import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../images/logo (1).png";

const Header = () => {
  const handleLogout = () => {
    // Logic for logging out the user
    console.log("User logged out");
  };

  return (
    <div className={styles.header}>
      <img src={logo} alt="Evangadi Forum Logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/How it works">How it works</Link>
          </li>
          <li>
            <button onClick={() => console.log("Navigate to SignIn")}>
              SignIn
            </button>
          </li>
          <li>
            <button onClick={handleLogout}>LogOut</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

