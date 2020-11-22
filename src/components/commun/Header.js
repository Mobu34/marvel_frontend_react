import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ fighter1, fighter2 }) => {
  const [isRulesDisplayed, setIsRulesDisplayed] = useState(false);

  const areReadyToFight = () => {
    if (fighter1.id && fighter2.id) {
      return (
        <span className="Header-readytofight">{`${fighter1.name} and ${fighter2.name} are ready to fight`}</span>
      );
    }
  };

  return (
    <>
      <header className="Header">
        <div className="Header-wrapper">
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
              FIGHT
            </Link>
          </div>

          <div className="Header-readytofight-container">
            {areReadyToFight()}
            <button
              className="Header-tournamentrules-btn"
              onClick={() => setIsRulesDisplayed(!isRulesDisplayed)}
            >
              FIGHTING RULES
            </button>
          </div>
        </div>
        <div
          style={{
            // backgroundColor: "yellow",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            // src={marvelLogo}
            src="https://media.giphy.com/media/NUsKoYiGm1RPHl1eWM/giphy.gif"
            alt="Logo Marvel Comics"
            className="Header-logo"
          />
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
            Marvel, il vous suffit de sélectionner 2 personnages et de vous
            rendre dans l'onglet FIGHT.
            <br />
            ENJOY ! :)
          </p>
        </div>
      </header>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    fighter1: state.fight.fighter1,
    fighter2: state.fight.fighter2,
  };
};

export default connect(mapStateToProps)(Header);
