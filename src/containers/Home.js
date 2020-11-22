import React from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

const Home = () => {
  return (
    <div className="Home">
      <div className="Home-enter-btn">
        <Link to="characters/page_1" className="Home-link-container">
          <Loader type="Puff" color="#f11d22" />
          <span className="Home-enter">ENTER</span>
        </Link>
        {/* <Link to="characters/page_1" className="link">
          ENTRER
        </Link> */}
      </div>

      {/* <button onClick={() => setEnter(true)}>ENTRER</button> */}
    </div>
  );
};

export default Home;
