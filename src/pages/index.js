import * as React from "react";

import Slider from "../components/Sliders";
import Layout from "../parts/layout";
import Disciplines from "../components/disciplines";
import Memberships from "../components/memberships";
import ScheduleCTA from "../components/scheduleCTA";
import Coaches from "../components/coaches";
import Values from "../components/values";
import TheApp from "../components/theApp";
import Contact from "../components/contact";

const IndexPage = () => {
  return (
    <Layout pageTitle="La comunidad fitness más grande de la VII región">
      <Slider />
      <Disciplines />
      <Memberships summarized={true} title="Planes" moreLink={true} />
      <ScheduleCTA />
      <Coaches />
      <Values />
      <TheApp />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
