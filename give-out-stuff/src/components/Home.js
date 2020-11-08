import React from "react";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import Home4Steps from "./Home4Steps";
import HomeAboutUs from "./HomeAboutUs";
import HomeHelpWho from "./HomeHelpWho";
import HomeContact from "./HomeContact";
import Footer from "./Footer";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <Element name="whatAbout">
        <HomeThreeColumns />
      </Element>
      <Home4Steps />
      <Element name="aboutUs">
        <HomeAboutUs />
      </Element>
      <Element name="helpWho">
        <HomeHelpWho />
      </Element>
      <Element name="contact">
        <HomeContact />
      </Element>
      <Footer />
    </>
  );
};
export default Home;
