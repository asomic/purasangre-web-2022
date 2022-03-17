import * as React from "react";
import { Link } from "gatsby";

import "../styles/memberships.sass";

const Memberships = () => {
  return (
    <section className="memberships">
      <div className="memberships-header">
        <h1 className="color-turquoiseBlue">Planes</h1>
      </div>
      <div className="memberships-cards">
        {/* Card */}
        <div className="membership-card">
          <div className="membership-card-header">
            <p>Plan</p>
            <h2>Full Mensual</h2>
          </div>
          <div className="membership-card-info">
            <p>
              1 clase por día <br />
              Cualquier horario
            </p>
          </div>
          <div className="membership-card-footer">
            <div className="price">
              <h4>$50.000</h4> <span>/mes</span>
            </div>
            <a href="" className="button turquoise">
              Comprar &gt;
            </a>
          </div>
        </div>
      </div>
      <Link to="/planes" className="button pink">
        Ver todos los planes &gt;
      </Link>
    </section>
  );
};

export default Memberships;
