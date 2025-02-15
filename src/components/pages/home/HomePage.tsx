import React from "react";
import Welcome from "./homePage/Welcome";
import Chapter from "./homePage/Chapter";
import MySite from "./homePage/MySite";
import Outfits from "./homePage/Outfits";

const HomePage = () => {
  return (
    <div>
      <Welcome />
      <MySite />
      <Chapter />
      <Outfits />
    </div>
  );
};

export default HomePage;
