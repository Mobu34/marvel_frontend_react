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
          <p>
            Vous pouvez déclencher un combat entre les personnages de l'univers
            Marvel, il vous suffit de sélectionner 2 à 8 personnages et de vous
            rendre dans l'onglet TOURNAMENT.
            <br />
            ENJOY ! :)
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
