import * as React from "react";

import Slider from "../components/Sliders";
import Layout from "../parts/layout";
import Disciplines from "../components/disciplines";
import Memberships from "../components/memberships";

const IndexPage = () => {
  return (
    <Layout pageTitle="La comunidad fitness más grande de la VII región">
      <Slider />
      <Disciplines />
      <Memberships />
    </Layout>
  );
};

export default IndexPage;
