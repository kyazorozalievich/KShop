import React from "react";
import Welcome from "./homePage/Welcome";
import Chapter from "./homePage/Chapter";
import MySite from "./homePage/MySite";
import Outfits from "./homePage/Outfits";
import Clothes from "./homePage/Clothes";
import Accessories from "./homePage/Accessories";

const HomePage = () => {
  return (
    <div>
      <Welcome />
      <MySite />
      <Chapter />
      <Outfits />
      <Clothes />
      <Accessories />
    </div>
  );
};

export default HomePage;
