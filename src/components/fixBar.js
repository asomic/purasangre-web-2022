import React, { useState, useEffect } from "react";

import "../styles/fixBar.sass";

import whatsAppWhiteIcon from "../images/icon-whatsAppWhite.svg";

const FixBar = () => {
  const [barState, setBarState] = useState(true);

  useEffect(() => {
    if (window.localStorage.getItem("theme") == "closed") {
      setBarState(false);
    } else {
      window.localStorage.setItem("theme", "showed");
    }
  }, []);

  function closeBar() {
    window.localStorage.setItem("theme", "closed");
    setBarState(false);
  }

  return (
    <>
      <div className={`fix-bar ${barState ? "" : "closed"}`}>
        <a>
          Obten&nbsp;<span className="bold">3 clases gratis</span>{" "}
          <span className="bold whatsappLink">
            <img src={whatsAppWhiteIcon} /> SOLICITA POR WHATSAPP
          </span>
        </a>
        <div className="close" onClick={closeBar}>
          ✕
        </div>
      </div>
    </>
  );
};

export default FixBar;
