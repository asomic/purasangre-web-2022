import { Link } from "gatsby";
import * as React from "react";
import "../styles/scheduleCTA.sass";

const ScheduleCTA = () => {
  return (
    <section className="scheduleCTA">
      <h1 className="color-turquoiseBlue">Revisa nuestros horarios</h1>
      <p>
        Durante el día hay mucho por hacer y{" "}
        <span className="bold">
          en Pura Sangre siempre hay un espacio para ti
        </span>
        .
      </p>
      <Link to="/horarios" className="button pink">
        Ver horarios &gt;
      </Link>
    </section>
  );
};

export default ScheduleCTA;
