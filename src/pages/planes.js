import React, { useState, useEffect } from "react";
import Layout from "../parts/layout";
import PageHeader from "../components/pageHeader";
import Memberships from "../components/memberships";
import Contact from "../components/contact";

const PlanesPage = ({ location }) => {
  return (
    <Layout pageTitle="Planes" pathname={location.pathname}>
      <PageHeader
        title="Planes"
        desc="Planes para ser un Purasangre"
        image="/backpage-planes-alt.webp"
      />
      <Memberships title="Todos nuestros planes" />
      <Contact />
    </Layout>
  );
};

export default PlanesPage;
