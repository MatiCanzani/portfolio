import React from "react";
import { Link } from "gatsby";
import Navbar from "../Navbar";
import "./Header.scss";
import { AnchorLink } from "gatsby-plugin-anchor-links";


const Header = () => {
  return (
    <header className="container">
      <AnchorLink className="link" to="/">
        mati canzani
      </AnchorLink>
      <Navbar />
    </header>
  );
};

export default Header;
