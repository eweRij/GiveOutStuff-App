import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
const MenuToScroll = () => {
  //   const scrollToBot = () => {
  //     scroll.scrollToBottom();
  //   };
  return (
    <>
      <li>
        <Link
          //   onClick={scrollToBot}
          to="whatAbout"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          O co chodzi?
        </Link>
      </li>
      <Link to="aboutUs" spy={true} smooth={true} offset={-70} duration={500}>
        <li>O nas</li>
      </Link>
      <Link to="helpWho" spy={true} smooth={true} offset={-70} duration={500}>
        <li>Fundacja i organizacje</li>
      </Link>
      <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
        <li>Kontakt</li>
      </Link>
    </>
  );
};

export default MenuToScroll;
