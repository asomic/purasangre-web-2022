import * as React from "react";
import { Link } from "gatsby";
import Layout from "../parts/layout";
import PageHeader from "../components/pageHeader";

const NotFoundPage = ({ location }) => {
  return (
    <Layout pageTitle={`Página no encontrada`} pathname={location.pathname}>
      <PageHeader
        title="Página no encontrada"
        desc=""
        image="/backpage-crossfit.jpg"
      />
      <div
        style={{
          padding: "10vw 20vh",
          textAlign: "center",
        }}
      >
        <p
          style={{
            marginBottom: "22px",
          }}
        >
          La página que buscas no está disponile porque el link es incorrecto o
          porque cambió de url.
        </p>
        <Link to="/" className="button turquoise">
          Volver a la página de inicio &gt;
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
