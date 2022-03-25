import * as React from "react";
import Layout from "../parts/layout";
import PageHeader from "../components/pageHeader";
import Memberships from "../components/memberships";

const PlanesPage = () => {
  return (
    <Layout pageTitle="Planes">
      <PageHeader
        title="Planes"
        desc="Planes para ser un Purasangre"
        image="/backpage-planes.jpg"
      />
      <Memberships title="Todos nuestros planes" />
    </Layout>
  );
};

export default PlanesPage;
