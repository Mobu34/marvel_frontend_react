import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Title from "../components/commun/Title";

const Tournament = ({ teamA, teamB }) => {
  console.log("team A =", teamA);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingFight, setIsLoadingFight] = useState(false);
  const [fightersA, setFightersA] = useState([]);
  const [fightersB, setFightersB] = useState([]);
  const [winner, setWinner] = useState(false);
  const [teamWinner, setTeamWinner] = useState({});

  useEffect(() => {
    setFightersA(teamA);
    setFightersB(teamB);
    setIsLoading(false);
  }, [teamA, teamB]);

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
    console.log("canceled");
  };

  console.log(fightersA);

  return (
    <div className="Tournament">
      <div className="wrapper">
        <div className="Tournament-wrapper">
          {isLoading ? (
            "Chargement en cours"
          ) : fightersA.length === 0 || fightersB.length === 0 ? (
            <Title title="Please select 2 fighters to start the fight" />
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
                    {fightersA.map((fighter, index) => {
                      return (
                        <img
                          className="Tournament-fighter-image"
                          key={index}
                          src={
                            fighter.thumbnail.path +
                            "." +
                            fighter.thumbnail.extension
                          }
                          alt=""
                        />
                      );
                    })}
                  </div>
                  <div className="Tournament-versus">VS</div>
                  <div className="Tournament-teamB">
                    {fightersB.map((fighter, index) => {
                      return (
                        <img
                          className="Tournament-fighter-image"
                          key={index}
                          src={
                            fighter.thumbnail.path +
                            "." +
                            fighter.thumbnail.extension
                          }
                          alt=""
                        />
                      );
                    })}
                  </div>
                </div>
                {isLoadingFight ? (
                  "Fight in progress..."
                ) : winner ? (
                  <>
                    <h2 className="Tournament-winner">{`Winner is ${teamWinner[0].name}`}</h2>
                    <img
                      src={
                        teamWinner[0].thumbnail.path +
                        "." +
                        teamWinner[0].thumbnail.extension
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
    teamA: state.fight.teamA,
    teamB: state.fight.teamB,
  };
};

export default connect(mapStateToProps)(Tournament);
