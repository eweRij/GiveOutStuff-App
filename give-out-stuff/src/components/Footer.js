import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__empty"></div>
      <div className="footer__copywright">Copyright by Coders Lab</div>
      <div className="footer__media">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <div className="footer__media__fb"></div>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <div className="footer__media__ig"></div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
