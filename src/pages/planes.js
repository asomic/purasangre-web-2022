import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../parts/layout";
import PageHeader from "../components/pageHeader";
import Memberships from "../components/memberships";
import Contact from "../components/contact";

const PlanesPage = () => {
  return (
    <Layout pageTitle="Planes">
      <PageHeader
        title="Planes"
        desc="Planes para ser un Purasangre"
        image="/backpage-planes.jpg"
      />
      <Memberships title="Todos nuestros planes" />
      <Contact />
    </Layout>
  );
};

export default PlanesPage;
