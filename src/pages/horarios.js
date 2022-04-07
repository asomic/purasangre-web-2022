import * as React from "react";
import Layout from "../parts/layout";
import PageHeader from "../components/pageHeader";
import Schedules from "../components/schedules";
import Contact from "../components/contact";

const HorariosPage = () => {
  return (
    <Layout pageTitle="Horarios">
      <PageHeader
        title="Horarios"
        desc="Siempre hay un lugar para ti durante el día"
        image="/backpage-horarios.jpg"
      />
      <Schedules />
      <Contact />
    </Layout>
  );
};

export default HorariosPage;
