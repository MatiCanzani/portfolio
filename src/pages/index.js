import * as React from "react";
import Layout from "../components/Layout";
import About from "../components/About";
import Contact from "../components/Contact";
import Works from "../components/Works";
import Hero from "../components/Hero";

import "../styles/main.scss";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Mati Portfolio</title>
      <Layout>
        <Hero />
        <About />
        <Works />
        <Contact />
      </Layout>
    </main>
  );
};

export default IndexPage;
