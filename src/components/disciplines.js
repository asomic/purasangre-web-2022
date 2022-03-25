import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "../styles/disciplines.sass";
import emblemIcon from "../images/emblem.svg";
import { Link } from "gatsby";

const Disciplines = () => {
  return (
    <section className="disciplines">
      <div className="disciplines-inner">
        <div className="disciplines-header">
          <img src={emblemIcon} alt="Emblema Pura Sangre CrossFit" />
          <h1>
            <span className="regular">Esto es</span> <br />
            <span className="color-turquoiseBlue italic">Pura Sangre</span>
          </h1>
        </div>
        <div className="discipline-cards">
          <Link
            to="/crossfit"
            className="discipline-card"
            style={{ backgroundImage: "url(/back-crossfit.jpg)" }}
          >
            <h2>CrossFit</h2>
            <p>El core de Pura Sangre</p>
          </Link>
          <Link
            to="/personalizado"
            className="discipline-card"
            style={{ backgroundImage: "url(/back-personalizado.jpg)" }}
          >
            <h2>Personalizado</h2>
            <p>Entrena CrossFit al ritmo que quieras</p>
          </Link>
          <Link
            to="/nutricion"
            className="discipline-card"
            style={{ backgroundImage: "url(/back-nutricion.jpg)" }}
          >
            <h2>Nutrición</h2>
            <p>Complementa tus entrenamientos con una alimentación adecuada</p>
          </Link>
          <div className="discipline-card-special">
            <StaticImage
              src="../images/crossfit-logo.png"
              alt="Logo de Crossfit"
            />
            <h4 className="regular">
              <span className="bold italic">único box certificado</span> de la
              región
            </h4>
            <p>
              Entrena en un lugar seguro con altos estándares y{" "}
              <strong className="bold">certificado por CrossFit</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disciplines;
