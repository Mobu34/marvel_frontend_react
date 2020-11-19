import React, { useState } from "react";
import { Link } from "react-router-dom";

import marvelLogo from "/Users/Lucas/LeReacteur/React/Marvel/marvel_frontend_react/src/assets/images/marvel-logo.png";

const Header = () => {
  const [isRulesDisplayed, setIsRulesDisplayed] = useState(false);

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
            <Link to="/comics/page_1" className="Header-nav-link link">
              COMICS
            </Link>
            <Link to="/favorites" className="Header-nav-link link">
              FAVS
            </Link>
            <Link to="/tournament" className="Header-nav-link link">
              TOURNAMENT
            </Link>
          </div>
          <button
            className="Header-tournamentrules-btn"
            onClick={() => setIsRulesDisplayed(!isRulesDisplayed)}
          >
            TOURNAMENT RULES
          </button>
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
        <div
          className={
            isRulesDisplayed
              ? "Header-tournamentrules-container"
              : "Header-tournamentrules-container-hidden"
          }
        >
          <h2>
            You can trigger a fight between 2 Marvel characters, select your
            fighters with the top-left button on their picture and let's FIGHT
          </h2>
        </div>
      </header>
    </>
  );
};

export default Header;
