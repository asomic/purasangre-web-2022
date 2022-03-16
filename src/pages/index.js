import * as React from "react";
// import { Helmet } from "react-helmet";
import Slider from "../components/Sliders";
import Layout from "../parts/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="La comunidad fitness más grande de la VII región">
      <Slider />
    </Layout>
  );
};

export default IndexPage;
