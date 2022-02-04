import React from "react"
import Helmet from "react-helmet"
import { Global, css } from "@emotion/react"
import Header from "../components/header"


const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            font-size: 1.6rem;
            line-height: 2;
            /* font-family: "Kumbh Sans", sans-serif; */
            font-family: "Lato", sans-serif;
            background-color: #252323;
            color: white;
          }
        `}
      />
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

      <Header />
      {children}
    </>
  )
}

export default Layout
