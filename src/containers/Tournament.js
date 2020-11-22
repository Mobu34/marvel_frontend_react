import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Title from "../components/commun/Title";

const Tournament = ({ fighter1, fighter2, dispatch }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingFight, setIsLoadingFight] = useState(false);
  const [fightersA, setFightersA] = useState({});
  const [fightersB, setFightersB] = useState({});
  const [winner, setWinner] = useState(false);
  const [teamWinner, setTeamWinner] = useState({});

  const gif = [
    "https://media.giphy.com/media/3o8dFrnhYXR7LvfXdm/giphy.gif",
    "https://media.giphy.com/media/10H4by255F2UsU/giphy.gif",
    "https://media.giphy.com/media/3o6QL2hWeeBHlcZ8qs/giphy.gif",
    "https://media.giphy.com/media/3o7TKKxPt2DhOdqeSQ/giphy.gif",
    "https://media.giphy.com/media/kkYbDLFmNvO4E/giphy.gif",
    "https://media.giphy.com/media/8d1tKuxOvDIHK/giphy.gif",
  ];
  const random = Math.round(Math.random() * 6) - 1;

  useEffect(() => {
    setFightersA(fighter1);
    setFightersB(fighter2);
    setIsLoading(false);
  }, [fighter1, fighter2]);

  const handleClick = () => {
    const random = Math.round(Math.random() * 10);
    if (random % 2 === 0) {
      setTeamWinner(fightersB);
    } else {
      console.log("impair");
      setTeamWinner(fightersA);
    }
    setIsLoadingFight(true);
    setInterval(() => {
      setIsLoadingFight(false);
      setWinner(true);
    }, 5000);
  };

  const handleCancelFightClick = () => {
    const action = { type: "CANCEL_FIGHT" };
    dispatch(action);
  };

  console.log(fightersA);

  return (
    <div className="Tournament">
      <div className="wrapper">
        <div className="Tournament-wrapper">
          {isLoading ? (
            "Chargement en cours"
          ) : !fightersA.thumbnail || !fightersB.thumbnail ? (
            <Title title="Please select 2 characters to start the fight" />
          ) : (
            <>
              <Title title="LET'S FIGHT" />
              <div className="Tournament-fight-container">
                {winner && (
                  <span className="Tournament-tryagain" onClick={handleClick}>
                    Fight again
                  </span>
                )}
                <span
                  className="Tournament-cancelfight"
                  onClick={handleCancelFightClick}
                >
                  Cancel the fight
                </span>
                <div className="Tournament-versus-container">
                  <div className="Tournament-teamA">
                    <img
                      className="Tournament-fighter-image"
                      src={
                        fightersA.thumbnail.path +
                        "." +
                        fightersA.thumbnail.extension
                      }
                      alt=""
                    />
                  </div>
                  <div className="Tournament-versus">VS</div>
                  <div className="Tournament-teamB">
                    {/* {fightersB.map((fighter, index) => { */}
                    {/* return ( */}
                    {fightersB.thumbnail && (
                      <img
                        className="Tournament-fighter-image"
                        // key={index}
                        src={
                          fightersB.thumbnail.path +
                          "." +
                          fightersB.thumbnail.extension
                        }
                        alt=""
                      />
                    )}
                    {/* ); */}
                    {/* })} */}
                  </div>
                </div>
                {isLoadingFight ? (
                  <>
                    <span className="Tournament-winner">
                      Fight in progress ...{" "}
                    </span>
                    <img src={gif[random]} alt="" />
                  </>
                ) : winner ? (
                  <>
                    <h2 className="Tournament-winner">{`Winner is ${teamWinner.name}`}</h2>
                    <img
                      src={
                        teamWinner.thumbnail.path +
                        "." +
                        teamWinner.thumbnail.extension
                      }
                      alt=""
                    />
                  </>
                ) : (
                  <h2 onClick={handleClick}>Fight</h2>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fighter1: state.fight.fighter1,
    fighter2: state.fight.fighter2,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => {
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tournament);
