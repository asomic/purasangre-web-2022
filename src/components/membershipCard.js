import React from "react";

import "../styles/membershipCard.sass";

import WhatsappIcon from "./whatsappIcon";

const MembershipCard = ({ memberships, summarized }) => {
  const currency = function (number) {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
    }).format(number);
  };

  return (
    <div className={`membership-card ${memberships.summarized && "mDisplay"}`}>
      <div className="membership-card-header">
        <p>Plan</p>
        <h2>{memberships.info.name}</h2>
      </div>
      <div className="membership-card-info">
        <p>{memberships.info.days}</p>
        <p>{memberships.info.hours}</p>
      </div>

      {summarized
        ? memberships.periods.result
            .filter((item) => item.name === "Mensual")
            .map((period, i) => (
              <div className="membership-card-footer" key={i}>
                <div className="price">
                  <h4>{currency(period.price)}</h4>{" "}
                  <span>
                    /{period.name === "Mensual" ? "mes" : period.name}
                  </span>
                </div>
                {period.buyable ? (
                  <a
                    href={`https://admin.purasangrecrossfit.cl/new-user/${period.id}/create`}
                    target="_blank"
                    rel="noreferrer"
                    className="button turquoise"
                  >
                    Contrata &gt;
                  </a>
                ) : (
                  <a
                    href="https://wa.me/56940207699?text=Hola,%20quiero%20saber%20mas%20sobre%20el%20plan..."
                    className="button pink"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <WhatsappIcon />
                    Contáctanos via Whatsapp &gt;
                  </a>
                )}
              </div>
            ))
        : memberships.periods.result.map((period, i) => (
            <div className="membership-card-footer notSummarized" key={i}>
              <div className="price">
                <h4>{currency(period.price)}</h4>{" "}
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
              {period.buyable ? (
                <a
                  href={`https://admin.purasangrecrossfit.cl/new-user/${period.id}/create`}
                  target="_blank"
                  rel="noreferrer"
                  className="button turquoise"
                >
                  Contrata &gt;
                </a>
              ) : (
                <a
                  href="https://wa.me/56940207699?text=Hola,%20quiero%20saber%20mas%20sobre%20el%20plan..."
                  className="button pink"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <WhatsappIcon />
                  Contáctanos via Whatsapp &gt;
                </a>
              )}
            </div>
          ))}
    </div>
  );
};

export default MembershipCard;
