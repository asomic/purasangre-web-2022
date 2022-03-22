import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import "../styles/theApp.sass";

const appFeatures = [
  "Reserva y confirma clases",
  "Contrata planes y paga con todo medio",
  "Revisa el workout del día y quienes asistirán",
  "Revisa el historial de pagos e información de tu plan",
  "Recibe notificaciones del box y entérate de todo",
  "Revisa tu asistencia",
];

const TheApp = () => {
  return (
    <section className="theApp">
      <div className="theAppInner">
        <div className="theAppInnerImage">
          <StaticImage src="../images/mockup-app.png" className="appImage" />
          <StaticImage src="../images/mockup-app.png" className="appImage" />
        </div>
        <div className="theAppInnerData">
          <StaticImage src="../images/icon-app.png" alt="Pura Sangre app" />
          <h2>Nuestra app</h2>
          <p>
            DISPONIBLE EN
            <br />
            APP STORE Y PLAY STORE
          </p>
          <ul>
            {appFeatures.map((item, i) => {
              return <li key={i}>{item}</li>;
            })}
          </ul>
          <div className="badges">
            <a href="/" target="_blank" rel="noreferrer">
              <StaticImage
                src="../images/badge-googleplay.png"
                height={39}
                alt="Descarga desde Play Store"
              />
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <StaticImage
                src="../images/badge-appstore.png"
                height={39}
                alt="Descarga desde App Store"
              />
            </a>
          </div>
          <div className="by">
            <p>powered by</p>
            <StaticImage src="../images/icon-nfit.png" alt="NFIT" width={25} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheApp;
