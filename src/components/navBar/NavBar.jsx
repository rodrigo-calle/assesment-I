import { Link } from 'react-router-dom';
import React from 'react';

import './NavBar.css';

const NavBar = () => {
  return (
    <div className="menu-container">
      <div className="menu-container__logo-container">
        <img
          src="logo-assestment.png"
          className="menu-container__logo-container--logo"
          alt="logo"
        />
      </div>

      <div className="menu-container__menu">
        <Link to="/" className="menu-container__menu--item">
          Home
        </Link>
        <Link to="/about" className="menu-container__menu--item">
          About
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
