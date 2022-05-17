import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import Footer from "./footer";
import Header from "./header";
import "../styles/globals.sass";
import FixBar from "../components/fixBar";

const Layout = ({ pageTitle, children, pathname }) => {
  const [blockScroll, setBlockScroll] = useState(false);

  useEffect(() => {
    if (blockScroll) {
      document.body.classList.add("block-scroll");
    } else {
      document.body.classList.remove("block-scroll");
    }
  }, [blockScroll]);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        {pathname === "/" ? (
          <title>
            Pura Sangre CrossFit — La comunidad fitness más grande de la VII
            región
          </title>
        ) : (
          <title>{pageTitle} — Pura Sangre CrossFit</title>
        )}
        {/* <link rel="canonical" href="http://purasangrecrossfit.cl" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Header setBlockScroll={setBlockScroll} />
      {children}
      <Footer />
      <FixBar />
    </div>
  );
};

export default Layout;
