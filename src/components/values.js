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
              style={{ backgroundImage: "url(/back-value1.webp)" }}
            >
              <h3>Sin egos</h3>
              <p>
                En Pura Sangre competirás contigo mismo, mejorando tus
                capacidades y los resultados llegarán por si solos.
              </p>
            </div>
            <div
              className="value"
              style={{ backgroundImage: "url(/back-value2.webp)" }}
            >
              <h3>Compañerismo</h3>
              <p>
                Intégrate a una gran familia que te ayudará a cambiar tu vida y
                superar metas que creías imposibles.
              </p>
            </div>
            <div
              className="value"
              style={{ backgroundImage: "url(/back-value3.webp)" }}
            >
              <h3>Pasarlo bien</h3>
              <p>
                Celebramos aniversarios, halloween, competencias, entre otras
                actividades para compartir y pasarlo bien.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
