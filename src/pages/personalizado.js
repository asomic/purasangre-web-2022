import * as React from "react";
import Infocarddata from "../components/InfoCardData";
import Infocardimage from "../components/InfoCardImage";
import Infocards from "../components/infoCards";
import PageHeader from "../components/pageHeader";
import Layout from "../parts/layout";

import WhatsappIcon from "../images/icon-whatsapp.svg";
import Contact from "../components/contact";

const PersonalizadoPage = () => {
  return (
    <Layout pageTitle="Personalizado">
      <PageHeader
        title="Personalizado"
        desc="Entrena CrossFit al ritmo que quieras"
        image="/backpage-personalizado.jpg"
      />
      <Infocards>
        <Infocardimage image="/back-3.jpg" />
        <Infocarddata>
          <div className="info-card-data-header">
            <h1>CrossFit a tu ritmo</h1>
          </div>
          <div className="info-card-data-body">
            <p>
              El personalizado de CrossFit consiste en clases particulares de
              CrossFit en el box con horario variable y personalizable.
            </p>
            <p>
              El coach estará siempre a tu lado en los ejercicios motivándote y
              corrigiendo los movimientos y posturas para poder sacar el máximo
              de ti.
            </p>
          </div>
        </Infocarddata>
        <Infocardimage image="/back-4.jpg" />
        <Infocarddata>
          <div className="info-card-data-header">
            <p className="pretitle">Plan</p>
            <h1 className="italic">personalizado</h1>
          </div>
          <div className="info-card-data-body">
            <p>
              Horario a convenir con el coach
              <br />
              Incluye un mes de consulta nutricional
            </p>
            <div className="price">
              <p>
                $130.000
                <span>/mes</span>
              </p>
            </div>
            <a href="/" className="button pink">
              <img src={WhatsappIcon} />
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
