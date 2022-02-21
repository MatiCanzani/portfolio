import React, { useRef, useEffect } from "react";
import "./Cursor.scss";
import { gsap } from "gsap";

const Cursor = () => {
  const dotOutline = useRef();
  const dot = useRef();

  useEffect(() => {
    if (dot.current) {
      gsap.set(dot.current, { xPercent: -50, yPercent: -50 });
      gsap.set(dotOutline.current, { xPercent: -50, yPercent: -50 });
      window.addEventListener("mousemove", (e) => {
        gsap.to(".cursor-outline", {
          duration: 0.9,
          x: e.clientX,
          y: e.clientY,
        });
        gsap.to(".cursor-dot", { duration: 0, x: e.clientX, y: e.clientY });
      });
    }
  });

  return (
    <>
      <div ref={dot} className="cursor-dot"></div>
      <div ref={dotOutline} className="cursor-outline"></div>
    </>
  );
};

export default Cursor;
