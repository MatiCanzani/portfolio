import React from "react";
import "./Hero.scss";
import Scroll from "../Scroll";
import { graphql } from "gatsby"
import useImage from "../../hooks/useImage";

const Hero = () => {
  const image = useImage()

  return (
    <section className="hero-cntr">
      {/* <div className="hero-cntr"> */}
        <div className="name">
          <h1 className="name__filled">MATIAS</h1>
          <h1 className="name__hollow">CANZANI</h1>
            <img src={image} alt="" />
        </div>
        <div className="title">
          <h2 className="title__hollow">WEB </h2>
          <h2 className="title__filled">DEVELOPER</h2>
        </div>
        <Scroll />
      {/* </div> */}
    </section>
  );
};

export default Hero;


