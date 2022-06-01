import * as React from "react";
import Infocarddata from "../components/InfoCardData";
import Infocardimage from "../components/InfoCardImage";
import Infocards from "../components/infoCards";
import PageHeader from "../components/pageHeader";
import Layout from "../parts/layout";

// import WhatsappIcon from "../images/icon-whatsapp.svg";
import Contact from "../components/contact";

import WhatsappIcon from "../components/whatsappIcon";

const PersonalizadoPage = ({ location }) => {
  return (
    <Layout pageTitle="Personalizado" pathname={location.pathname}>
      <PageHeader
        title="Personalizado"
        desc="Entrena CrossFit al ritmo que quieras"
        image="/backpage-personalizado-alt.webp"
      />
      <Infocards>
        <Infocardimage image="/back-7.webp" />
        <Infocarddata>
          <div className="info-card-data-header">
            <h1>
              <span className="italic">CrossFit</span>{" "}
              <span className="color-turquoiseBlue">a tu ritmo</span>
            </h1>
          </div>
          <div className="info-card-data-body">
            <p>
              El entrenamiento personalizado está enfocado en lograr tus
              objetivos con una planificación{" "}
              <span className="bold">
                hecha exclusivamente para ti por profesionales del CrossFit
              </span>
              .
            </p>
            <p>
              El coach estará siempre a tu lado, te irá enseñando, corrigiendo y
              motivando 1 a 1, para lograr tu mejor versión
            </p>
          </div>
        </Infocarddata>
        <Infocardimage image="/back-8.webp" />
        <Infocarddata>
          <div className="info-card-data-header">
            <p className="pretitle">Plan</p>
            <h1 className="italic color-turquoiseBlue">personalizado</h1>
          </div>
          <div className="info-card-data-body">
            <p>Horario a convenir con el coach</p>
            <div className="price">
              <p>
                $130.000
                <span>/mes (3 veces por semana)</span>
              </p>
            </div>
            <div className="price">
              <p>
                $150.000
                <span>/mes (5 veces por semana)</span>
              </p>
            </div>
            <a
              href="https://wa.me/56940207699?text=Hola,%20quiero%20solicitar%20el%20plan%20personalizado"
              className="button pink"
              target="_blank"
              rel="noreferrer"
            >
              {/* <img src={WhatsappIcon} /> */}
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

export default PersonalizadoPage;
