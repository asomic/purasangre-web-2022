import React from "react";

import "../styles/InfoCards.sass";

const Infocards = ({ children }) => {
  return (
    <div className="info-cards-wrapper">
      <div className="info-cards">{children}</div>
    </div>
  );
};

export default Infocards;
