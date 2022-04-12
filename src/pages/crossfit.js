import * as React from "react";
import Layout from "../parts/layout";
import PageHeader from "../components/pageHeader";
import Infocards from "../components/infoCards";
import Infocardimage from "../components/InfoCardImage";
import Infocarddata from "../components/InfoCardData";
import Contact from "../components/contact";

const CrossfitPage = ({ location }) => {
  return (
    <Layout pageTitle="CrossFit" pathname={location.pathname}>
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
              Es un método de entrenamiento basado en ejercicios constantemente
              variados, con movimientos funcionales ejecutados a alta
              intensidad.
            </p>
            <p>
              Se puede utilizar para lograr cualquier objetivo, desde mejorar la
              salud hasta mejorar el rendimiento físico. Los entrenamientos
              funcionan para todos, desde las personas que nunca han hecho
              ejercicio y hasta los que han entrenado durante años, comparten
              por igual los beneficios de CrossFit.
            </p>
          </div>
        </Infocarddata>
        <Infocardimage image="/back-2.jpg" />
        <Infocarddata>
          <div className="info-card-data-header">
            <h1>Clases guiadas</h1>
            <p className="subtitle">Nunca estaras solo</p>
          </div>
          <div className="info-card-data-body">
            <p>
              La magia está en el movimiento. Los entrenamientos de CrossFit son
              diferentes cada día y se pueden modificar para ayudar a cada
              persona a lograr sus objetivos.
            </p>
            <p>
              Todas las clases son guiadas. Los coaches te enseñarán la correcta
              ejecución de los movimientos, los cuales pueden adaptarse a
              personas de cualquier edad y nivel de condición física.
            </p>
          </div>
        </Infocarddata>
      </Infocards>
      <Contact />
    </Layout>
  );
};

export default CrossfitPage;
