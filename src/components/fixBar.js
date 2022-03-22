import React, { useState, useEffect, useRef } from "react";

import "../styles/fixBar.sass";

import whatsAppWhiteIcon from "../images/icon-whatsAppWhite.svg";

const FixBar = () => {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  });
  return (
    <>
      <div className="fix-fix" style={{ height: height }}></div>
      <div className="fix-bar" ref={ref}>
        <a>
          Obten&nbsp;<span className="bold">3 clases gratis</span>{" "}
          <span className="bold whatsappLink">
            <img src={whatsAppWhiteIcon} /> SOLICITA POR WHATSAPP
          </span>
        </a>
        <div className="close"></div>
      </div>
    </>
  );
};

export default FixBar;
