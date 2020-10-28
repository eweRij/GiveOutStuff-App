import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import Home4Steps from "./Home4Steps";
import HomeAboutUs from "./HomeAboutUs";
import HomeHelpWho from "./HomeHelpWho";
import HomeContact from "./HomeContact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeThreeColumns />
      <Home4Steps />
      <HomeAboutUs />
      <HomeHelpWho />
      <HomeContact />
      <Footer />
    </>
  );
};
export default Home;
