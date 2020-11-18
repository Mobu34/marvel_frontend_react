import React from "react";
import { Link } from "react-router-dom";

import marvelLogo from "/Users/Lucas/LeReacteur/React/Marvel/marvel_frontend_react/src/assets/images/marvel-logo.png";

const Header = () => {
  return (
    <>
      <header className="Header">
        <div className="Header-wrapper">
          <img
            src={marvelLogo}
            alt="Logo Marvel Comics"
            className="Header-logo"
          />
          <div className="Header-nav-container">
            <Link to="/characters/page_1" className="Header-nav-link link">
              CHARACTERS
            </Link>
            <Link to="/comics" className="Header-nav-link link">
              COMICS
            </Link>
            <Link to="/favorites" className="Header-nav-link link">
              MY FAVS
            </Link>
          </div>
          <button className="Header-login-btn">LOGIN</button>
        </div>
        <div className="Header-input-container">
          <input
            type="text"
            name=""
            id=""
            className="Header-input"
            placeholder="LOOKING FOR SOMETHING?"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
