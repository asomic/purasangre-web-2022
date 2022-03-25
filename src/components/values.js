import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "../styles/values.sass";
import emblemIcon from "../images/emblem.svg";
import affiliateIcon from "../images/icon-affiliate.svg";
import coachesIcon from "../images/icon-certifiedcoaches.svg";
import equipmentIcon from "../images/icon-equipment.svg";
import sevenIcon from "../images/icon-seven.svg";

const Values = () => {
  return (
    <section className="values">
      <div className="values-inner">
        <div className="values-header">
          <img src={emblemIcon} alt="Emblema Pura Sangre CrossFit" />
          <h1>
            <span className="color-turquoiseBlue italic">Pura Sangre</span>
            <br />
            <span className="regular">es para ti</span> <br />
          </h1>
        </div>
        <div className="values-content">
          <div className="features-items">
            <div className="feature">
              <img src={sevenIcon} />
              <p className="highlight">años</p>
              <p>de experiencia</p>
            </div>
            <div className="feature">
              <img src={affiliateIcon} />
              <p className="highlight">box afiliado</p>
              <p>a crossfit</p>
            </div>
            <div className="feature">
              <img src={equipmentIcon} />
              <p className="highlight">equipamiento</p>
              <p>especializado</p>
            </div>
            <div className="feature">
              <img src={coachesIcon} />
              <p className="highlight">coaches</p>
              <p>certificados</p>
            </div>
          </div>
          <div className="values-items">
            <div
              className="value"
              style={{ backgroundImage: "url(/back-value1.jpg)" }}
            >
              <h3>Sin egos</h3>
              <p>
                Compite contigo mismo, potencia tus capacidades y los resultados
                llegaran.
              </p>
            </div>
            <div
              className="value"
              style={{ backgroundImage: "url(/back-value2.jpg)" }}
            >
              <h3>Compañerismo</h3>
              <p>El ambiente que se respira a diario en nuestro box.</p>
            </div>
            <div
              className="value"
              style={{ backgroundImage: "url(/back-value3.jpg)" }}
            >
              <h3>Pasarlo bien</h3>
              <p>Somos diferentes a otros gimnasios, cada día es distinto.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
