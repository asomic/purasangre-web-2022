import React from "react";

import "../styles/MembershipCard.sass";

const MembershipCard = ({ name, days, hours, periods, summarized }) => {
  return (
    <div className={`membership-card ${summarized && "mDisplay"}`}>
      <div className="membership-card-header">
        <p>Plan</p>
        <h2>{name}</h2>
      </div>
      <div className="membership-card-info">
        <p>
          {days} <br />
          {hours}
        </p>
      </div>
      {summarized
        ? periods
            .filter((item) => item.name === "mes")
            .map((period, i) => (
              <div className="membership-card-footer" key={i}>
                <div className="price">
                  <h4>&#36;{period.price}</h4> <span>/{period.name}</span>
                </div>
                <a
                  href={period.purchaseLink}
                  target="_blank"
                  rel="noreferrer"
                  className="button turquoise"
                >
                  Comprar &gt;
                </a>
              </div>
            ))
        : periods.map((period, i) => (
            <div className="membership-card-footer" key={i}>
              <div className="price">
                <h4>&#36;{period.price}</h4> <span>/{period.name}</span>
              </div>
              <a
                href={period.purchaseLink}
                target="_blank"
                rel="noreferrer"
                className="button turquoise"
              >
                Comprar &gt;
              </a>
            </div>
          ))}
    </div>
  );
};

export default MembershipCard;
