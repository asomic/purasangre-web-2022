import * as React from "react";
import Layout from "../parts/layout";
import PageHeader from "../components/pageHeader";
import Infocards from "../components/infoCards";
import Infocardimage from "../components/InfoCardImage";
import Infocarddata from "../components/InfoCardData";
import Contact from "../components/contact";

const CrossfitPage = () => {
  return (
    <Layout pageTitle="CrossFit">
      <PageHeader
        title="CrossFit"
        desc="El core de Pura Sangre"
        image="/backpage-crossfit.jpg"
      />
      <Infocards>
        <Infocardimage image="/back-1.jpg" />
        <Infocarddata>
          <div className="info-card-data-header">
            <h1>CrossFit</h1>
            <p className="subtitle">¿Qué es?</p>
          </div>
          <div className="info-card-data-body">
            <p>
              CrossFit es el deporte del fitness y se puede utilizar para lograr
              cualquier objetivo, desde{" "}
              <span className="bold">mejorar la salud</span> hasta{" "}
              <span className="bold">perder peso</span>.
            </p>
            <p>
              Consiste en un estilo de vida que se caracteriza por ejercicios
              seguros y eficaces combinados con una nutrición sana.
            </p>
          </div>
        </Infocarddata>
        <Infocardimage image="/back-2.jpg" />
        <Infocarddata>
          <div className="info-card-data-header">
            <h1>Ejercicios</h1>
            <p className="subtitle">de la vida diaria</p>
          </div>
          <div className="info-card-data-body">
            <p>
              La magia está en los movimientos. Los entrenamientos son
              diferentes cada día y se modifican para ayudar a cada persona a
              lograr sus objetivos.
            </p>
            <p>
              CrossFit usa movimientos funcionales y efectivos{" "}
              <span className="bold">
                similares a los que usas en tu día a día
              </span>
              .
            </p>
          </div>
        </Infocarddata>
      </Infocards>
      <Contact />
    </Layout>
  );
};

export default CrossfitPage;
