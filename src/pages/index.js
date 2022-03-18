import * as React from "react";

import Slider from "../components/Sliders";
import Layout from "../parts/layout";
import Disciplines from "../components/disciplines";
import Memberships from "../components/memberships";
import ScheduleCTA from "../components/scheduleCTA";
import Coaches from "../components/coaches";

const IndexPage = () => {
  return (
    <Layout pageTitle="La comunidad fitness más grande de la VII región">
      <Slider />
      <Disciplines />
      <Memberships />
      <ScheduleCTA />
      <Coaches />
    </Layout>
  );
};

export default IndexPage;
