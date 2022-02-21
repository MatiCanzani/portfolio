import React from "react";
import "./Footer.scss";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
        <div className="social-media">
          <h4>Follow Me</h4>
          <a href="https://www.instagram.com/maticanzani" target="_blank">
            <FaInstagram className="icon" />
          </a>
          <a href="https://uk.linkedin.com/in/maticanzani/" target="_blank">
            <FaLinkedinIn className="icon" />
          </a>
        </div>
      <div className="copy-rights">
        <p>All right reserved - {year} &copy;</p>
      </div>
      </footer>
    </>
  );
};

export default Footer;
