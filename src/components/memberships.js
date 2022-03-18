import * as React from "react";
import { Link } from "gatsby";

import "../styles/memberships.sass";
import dataMemberships from "../lib/dataMemberships";

const Memberships = () => {
  return (
    <section className="memberships">
      <div className="memberships-header">
        <h1 className="color-turquoiseBlue">Planes</h1>
      </div>
      <div className="memberships-cards">
        {/* Card */}
        {dataMemberships.map((item, index) => (
          <div className="membership-card" key={index}>
            <div className="membership-card-header">
              <p>Plan</p>
              <h2>{item.name}</h2>
            </div>
            <div className="membership-card-info">
              <p>
                {item.days} <br />
                {item.hours}
              </p>
            </div>
            <div className="membership-card-footer">
              <div className="price">
                <h4>&#36;{item.price}</h4> <span>/mes</span>
              </div>
              <a href="" className="button turquoise">
                Comprar &gt;
              </a>
            </div>
          </div>
        ))}
      </div>
      <Link to="/planes" className="button pink">
        Ver todos los planes &gt;
      </Link>
    </section>
  );
};

export default Memberships;
