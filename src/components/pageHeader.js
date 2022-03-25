import React from "react";
import emblemIcon from "../images/emblem.svg";

import "../styles/pageHeader.sass";

const PageHeader = ({ title, desc, image }) => {
  return (
    <div className="pageHeader" style={{ backgroundImage: `url(${image})` }}>
      <div className="pageHeaderInner">
        <img src={emblemIcon} />
        <h1 className="color-turquoiseBlue">{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default PageHeader;
