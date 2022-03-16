import * as React from "react";
import Slider from "../components/Sliders";
import Layout from "../parts/layout";
import "../styles/globals.sass";

const IndexPage = () => {
  return (
    <Layout pageTitle="La comunidad fitness más grande de la VII región">
      <Slider />
    </Layout>
  );
};

export default IndexPage;
