import React, { useState } from "react";

import "./Scroll.scss";

const isBrowser = () => typeof window !== "undefined";

const Scroll = () => {
  const [scroll, setScroll] = useState(true);

  const handleScroll = () => {
    if (isBrowser) {
      window.addEventListener("scroll", handleScroll);
      window.scrollY <= 80 ? setScroll(true) : setScroll(false);
    } 
  };
  return (
    <>
      <div className={scroll ? "scroll" : "scroll__hidden"}>
        <div className="scroll-icon">
          <span></span>
          <p>scroll</p>
        </div>
      </div>
    </>
  );
};

export default Scroll;
