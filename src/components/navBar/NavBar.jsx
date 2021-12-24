import { Link } from 'react-router-dom';
import React from 'react';

import './NavBar.css';

const NavBar = () => {
  return (
    <div className="menu-container">
      <img
        src="logo-assestment.png"
        className="menu-container__logo"
        alt="logo"
      />
      <div className="menu-container__menu">
        <Link to="/" className="menu-container__menu--item">
          Home
        </Link>
        <Link to="/detail:id" className="menu-container__menu--item">
          Product Detail
        </Link>
        <Link to="/about" className="menu-container__menu--item">
          About
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
