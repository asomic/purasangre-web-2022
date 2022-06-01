import * as React from "react";
import Contact from "../components/contact";
import Infocarddata from "../components/InfoCardData";
import Infocardimage from "../components/InfoCardImage";
import Infocards from "../components/infoCards";
import PageHeader from "../components/pageHeader";
import Layout from "../parts/layout";

import WhatsappIcon from "../components/whatsappIcon";

const NutricionPage = ({ location }) => {
  return (
    <Layout pageTitle="Nutrición" pathname={location.pathname}>
      <PageHeader
        title="Nutrición"
        desc="Complementa tus entrenamientos con una alimentación adecuada"
        image="/backpage-nutricion.webp"
      />
      <Infocards>
        <Infocardimage image="/back-nutricion.webp" />
        <Infocarddata>
          <div className="info-card-data-header">
            <h1>
              <span className="italic color-turquoiseBlue">La base</span> de tus
              Resultados
            </h1>
          </div>
          <div className="info-card-data-body">
            <p>
              En Pura Sangre contamos con profesionales nutricionistas que te
              educaran sobre una alimentación saludable y realizarán una
              planificación alimentaria personalizada a medida de tus objetivos.
            </p>
          </div>
        </Infocarddata>
        <Infocardimage image="/back-9.webp" />
        <Infocarddata>
          <div className="info-card-data-header">
            <h1>
              Nuestro{" "}
              <span className="color-turquoiseBlue">Servicio Nutricional</span>
            </h1>
            <p className="subtitle">Consta de</p>
          </div>
          <div className="info-card-data-body">
            <ul>
              <li>
                Anamnesis: Encuesta para conocer tus gustos y preferencias
              </li>
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
            <a
              href="https://wa.me/56940207699?text=Hola"
              className="button pink"
              target="_blank"
              rel="noreferrer"
            >
              <WhatsappIcon />
              Contáctanos via Whatsapp &gt;
            </a>
          </div>
        </Infocarddata>
      </Infocards>
      <Contact />
    </Layout>
  );
};

export default NutricionPage;
