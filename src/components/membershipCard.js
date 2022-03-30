import React from "react";

import "../styles/MembershipCard.sass";

const MembershipCard = ({ memberships, summarized }) => {
  return (
    <div className={`membership-card ${memberships.summarized && "mDisplay"}`}>
      <div className="membership-card-header">
        <p>Plan</p>
        <h2>{memberships.info.name}</h2>
      </div>
      <div className="membership-card-info">
        <p>
          {memberships.info.days} <br />
          {memberships.info.hours}
        </p>
      </div>

      {summarized
        ? memberships.periods.result
            .filter((item) => item.name === "Mensual")
            .map((period, i) => (
              <div className="membership-card-footer" key={i}>
                <div className="price">
                  <h4>&#36;{period.price}</h4>{" "}
                  <span>
                    /{period.name === "Mensual" ? "mes" : period.name}
                  </span>
                </div>
                {period.buyable && (
                  <a
                    href={`https://admin.purasangrecrossfit.cl/new-user/${period.id}/create`}
                    target="_blank"
                    rel="noreferrer"
                    className="button turquoise"
                  >
                    Comprar &gt;
                  </a>
                )}
              </div>
            ))
        : memberships.periods.result.map((period, i) => (
            <div className="membership-card-footer" key={i}>
              <div className="price">
                <h4>&#36;{period.price}</h4>{" "}
                <span>
                  /
                  {period.name === "Mensual"
                    ? "mes"
                    : period.name === "Trimestral"
                    ? "3 meses"
                    : period.name === "Semestral"
                    ? "6 meses"
                    : period.name === "Anual"
                    ? "año"
                    : period.name}
                </span>
              </div>
              {period.buyable && (
                <a
                  href={`https://admin.purasangrecrossfit.cl/new-user/${period.id}/create`}
                  target="_blank"
                  rel="noreferrer"
                  className="button turquoise"
                >
                  Comprar &gt;
                </a>
              )}
            </div>
          ))}
    </div>
  );
};

export default MembershipCard;
