import React, { useState } from "react";

import "./Scroll.scss";

const Scroll = () => {
  const [scroll, setScroll] = useState(true);

  const handleScroll = () => {
    window.scrollY <= 80 ? setScroll(true) : setScroll(false);
  };
  window.addEventListener("scroll", handleScroll);
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
