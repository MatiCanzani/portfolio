import React from "react";
import Helmet from "react-helmet";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../Header/index";
import Cursor from "../cursor/index";
import Footer from "../Footer";
import "./Layout.scss";

// gsap.registerPlugin(ScrollTrigger);

// let panels = gsap.utils.toArray(".section"),
//   scrollTween;

// const goToSection = (i) => {
//   console.log(i);
//   scrollTween = gsap.to(window, {
//     // eslint-disable-next-line no-restricted-globals
//     scrollTo: { y: i * innerHeight, autoKill: false },
//     duration: 1,
//     onComplete: () => (scrollTween = null),
//     overwrite: true,
//   });
// }
// panels.forEach((section, i) => {
//   ScrollTrigger.create({
//     trigger: section,
//     start: "top bottom",
//     pin: i === panels.length -1 ? false : true,
//     end: "+=200%",
//     pinSpacing: false,
//     onToggle: (self) => self.isActive && !scrollTween && goToSection(i),
//   });
// });

// // just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):
// ScrollTrigger.create({
//   start: 0,
//   end: "max",
//   snap: 1 / (panels.length - 1),
// });

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Mati Canzani Portfolio</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans&family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Cursor />
      <div className="container-fluid">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
