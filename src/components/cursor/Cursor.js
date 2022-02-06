import React, { useRef, useEffect } from "react";
import "./styles.scss";
import { gsap } from "gsap";

const Cursor = () => {
  const dotOutline = useRef();
  const dot = useRef(2);

  const cursor = gsap.utils.selector(dot);
  const follower = gsap.utils.selector(dotOutline);

  useEffect(() => {
      if (dot.current) { 
          gsap.set(dot.current, { xPercent: -50, yPercent: -50 });
          gsap.set(dotOutline.current, { xPercent: -50, yPercent: -50 });
          window.addEventListener("mousemove", (e) => {
              console.log(e)
              gsap.to(".cursor-outline", { duration: 0.9 , x: e.clientX, y: e.clientY, });
              gsap.to(".cursor-dot", { duration: 0. , x: e.clientX, y: e.clientY});
            });
        }
  });

  return (
    <>
      <h1>Desde Cursor</h1>
      <div ref={dot} className="cursor-dot"></div>
      <div ref={dotOutline} className="cursor-outline"></div>
    </>
  );
};

export default Cursor;
