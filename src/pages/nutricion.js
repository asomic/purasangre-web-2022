import * as React from "react";
import Contact from "../components/contact";
import Infocarddata from "../components/InfoCardData";
import Infocardimage from "../components/InfoCardImage";
import Infocards from "../components/infoCards";
import PageHeader from "../components/pageHeader";
import Layout from "../parts/layout";

const NutricionPage = ({ location }) => {
  return (
    <Layout pageTitle="Nutrición" pathname={location.pathname}>
      <PageHeader
        title="Nutrición"
        desc="Complementa tus entrenamientos con una alimentación adecuada"
        image="/backpage-nutricion.jpg"
      />
      <Infocards>
        <Infocardimage image="" />
        <Infocarddata>
          <div className="info-card-data-header">
            <h1>La base de tus Resultados</h1>
          </div>
          <div className="info-card-data-body">
            <p>
              En pura sangre contamos con profesionales nutricionistas que te
              educaran sobre una alimentación saludable y realizarán una
              planificación alimentaria personalizada a medida de tus objetivos.
            </p>
          </div>
        </Infocarddata>
        <Infocardimage image="" />
        <Infocarddata>
          <div className="info-card-data-header">
            <h1>Nuestro Servicio Nutricional</h1>
            <p className="subtitle">Consta de</p>
          </div>
          <div className="info-card-data-body">
            <ul>
              <li>Anamnesis Completa</li>
              <li>
                Antropometría: Mediciones (Peso, Talla, % de grasa, % masa
                muscular)
              </li>
              <li>Educación Alimentaria</li>
              <li>Pauta de Alimentación personalizada</li>
              <li>Recetario de Regalo</li>
            </ul>
            <div className="price">
              <p>
                $30.000
                <span>/consulta</span>
              </p>
            </div>
            <div className="price">
              <p>
                $65.000
                <span>/plan trimestral</span>
              </p>
            </div>
          </div>
        </Infocarddata>
      </Infocards>
      <Contact />
    </Layout>
  );
};

export default NutricionPage;
