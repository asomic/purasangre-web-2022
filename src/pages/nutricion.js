import * as React from "react";
import Contact from "../components/contact";
import Infocarddata from "../components/InfoCardData";
import Infocardimage from "../components/InfoCardImage";
import Infocards from "../components/infoCards";
import PageHeader from "../components/pageHeader";
import Layout from "../parts/layout";

const NutricionPage = () => {
  return (
    <Layout pageTitle="Nutrición">
      <PageHeader
        title="Nutrición"
        desc="Complementa tus entrenamientos con una alimentación adecuada"
        image="/backpage-nutricion.jpg"
      />
      <Infocards>
        <Infocardimage image="" />
        <Infocarddata>
          <div className="info-card-data-header">
            <h1>Título 1</h1>
          </div>
          <div className="info-card-data-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
              velit iure optio aperiam. Nesciunt a non id illum qui consectetur
              quae aliquid iure, ipsa ex omnis temporibus? Temporibus,
              blanditiis aut!
            </p>
          </div>
        </Infocarddata>
        <Infocardimage image="" />
        <Infocarddata>
          <div className="info-card-data-header">
            <h1>Título 2</h1>
          </div>
          <div className="info-card-data-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
              velit iure optio aperiam. Nesciunt a non id illum qui consectetur
              quae aliquid iure, ipsa ex omnis temporibus? Temporibus,
              blanditiis aut!
            </p>
          </div>
        </Infocarddata>
      </Infocards>
      <Contact />
    </Layout>
  );
};

export default NutricionPage;
