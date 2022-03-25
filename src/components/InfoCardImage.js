import React from "react";

import "../styles/InfoCardImage.sass";

const Infocardimage = ({ image }) => {
  return (
    <div
      className="info-card-img"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};

export default Infocardimage;
