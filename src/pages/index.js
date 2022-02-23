import React from "react";
import { FullPage, Slide } from "react-full-page";
import Layout from "../components/Layout";
import About from "../components/About";
import Contact from "../components/Contact";
import Works from "../components/Works";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "../styles/main.scss";

const IndexPage = () => {
  return (
    <main>
      <title>Mati Portfolio</title>
      <Layout>
        <FullPage>
          <Slide>
            <Hero />
          </Slide>
          <Slide>
            <About />
          </Slide>
          <Slide>
            <Works />
          </Slide>
          <Slide>
            <Contact />
          </Slide>
        <Slide className="footer-full">
          <Footer />
        </Slide>
        </FullPage>
      </Layout>
    </main>
  );
};

export default IndexPage;
