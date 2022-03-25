import * as React from "react";
import { Link } from "gatsby";

import dataMemberships from "../lib/dataMemberships";
import MembershipCard from "../components/MembershipCard";

import "../styles/memberships.sass";

const Memberships = ({ summarized, title, moreLink }) => {
  return (
    <section className="memberships">
      <div className="memberships-header">
        <h1 className="color-turquoiseBlue">{title}</h1>
      </div>
      <div className="memberships-cards">
        {/* Card */}
        {dataMemberships.map((item, index) => (
          <MembershipCard
            name={item.name}
            days={item.days}
            hours={item.hours}
            periods={item.periods}
            summarized={summarized}
            key={index}
          />
        ))}
      </div>
      {moreLink && (
        <Link to="/planes" className="button pink">
          Ver todos los planes &gt;
        </Link>
      )}
    </section>
  );
};

export default Memberships;
