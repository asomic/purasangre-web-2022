import React, { useState, useEffect } from "react";

import "../styles/fixBar.sass";

import whatsAppWhiteIcon from "../images/icon-whatsAppWhite.svg";

const FixBar = () => {
  const [barState, setBarState] = useState(true);

  useEffect(() => {
    const obtenerLS = () => {
      const barStateLS = JSON.parse(localStorage.getItem("theme")) ?? "showed";
      setBarState(barStateLS);
    };
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(barState));
  }, [barState]);

  function closeBar() {
    setBarState(false);
  }

  return (
    <>
      <div className={`fix-bar ${barState ? "" : "closed"}`}>
        <a
          href="https://wa.me/56940207699?text=Hola,%20quiero%20solicitar%20las%20tres%20clases%20gratis"
          target="_blank"
          rel="noreferrer noopener"
        >
          Prueba&nbsp;<span className="bold">una clase gratis</span>{" "}
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
