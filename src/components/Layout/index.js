import React from "react";
import Helmet from "react-helmet";
import Header from "../Header/index";
import Cursor from "../cursor/index";
import Footer from "../Footer";
import "./Layout.scss";

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
