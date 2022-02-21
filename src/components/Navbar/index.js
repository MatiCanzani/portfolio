import React, { useState } from "react";
import "./Navbar.scss";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { AnchorLink } from "gatsby-plugin-anchor-links";

gsap.registerPlugin(TextPlugin);

const Nav = () => {
  const [active, setActive] = useState("menu");
  const [togglerIcon, setTogglerIcon] = useState("nav__toggle");
  const handleToggle = () => {
    active === "menu" ? setActive("menu nav__active") : setActive("menu");

    // toggle action
    togglerIcon === "nav__toggle"
      ? setTogglerIcon("nav__toggle toggle")
      : setTogglerIcon("nav__toggle");
  };

  const closeMenu = () => {
    active === "menu nav__active"
      ? setActive("menu")
      : setActive("menu nav__active");
      
    togglerIcon === "nav__toggle toggle"
      ? setTogglerIcon("nav__toggle")
      : setTogglerIcon("nav__toggle toggle");
  };

  return (
    <>
      <nav>
        <div className={active}>
          <AnchorLink
            to="/#works"
            className="menu-item"
            activeClassName="active"
          >
            <span onClick={closeMenu}>works</span>
          </AnchorLink>
          <AnchorLink
            to="/#about"
            className="menu-item"
            activeClassName="active"
          >
            <span onClick={closeMenu}>about</span>
          </AnchorLink>
          <AnchorLink
            to="/#contact"
            className="menu-item"
            activeClassName="active"
          >
            <span onClick={closeMenu}>contact</span>
          </AnchorLink>
        </div>
        <div
          onClick={handleToggle}
          onKeyDown={handleToggle}
          className={togglerIcon}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
