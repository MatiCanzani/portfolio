import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./Hero.scss";
import Scroll from "../Scroll";
import Keyboard from "../Keyboard";

const Hero = () => {
  const boxRef = useRef();
  useEffect(() => {
    gsap.from(boxRef.current, { opacity: "0", delay: 0.5 });
    gsap.to(boxRef.current, { opacity: "1", duration: "2", delay: "2" });
  });

  return (
    <section className="section hero-cntr" ref={boxRef}>
      <Keyboard />
      <Scroll />
    </section>
  );
};

export default Hero;
