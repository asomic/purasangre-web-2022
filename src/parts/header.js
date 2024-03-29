import React, { useState } from "react";
import { Link } from "gatsby";
import "../styles/header.sass";
import { StaticImage } from "gatsby-plugin-image";

// import WhatsappIcon from "../images/icon-whatsapp.svg";
import WhatsappIcon from "../components/whatsappIcon";

const Header = ({ setBlockScroll }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [burgerChange, setBurgerChange] = useState(true);

  function menuTrigger() {
    if (menuOpen) {
      setMenuOpen(false);
      setBlockScroll(false);
    } else {
      setMenuOpen(true);
      setBlockScroll(true);
    }
    burgerChange === true ? setBurgerChange(false) : setBurgerChange(true);
  }

  return (
    <header className="header">
      <div className="header-inner">
        <div className="brand">
          <Link to="/">
            <StaticImage src="../images/logo.svg" alt="Pura Sangre CrossFit" />
          </Link>
        </div>
        <div
          className={`burger ${burgerChange ? "" : "close"}`}
          onClick={menuTrigger}
        >
          <div className="meat"></div>
        </div>
        <div className={`menu ${menuOpen ? "show" : ""}`}>
          <div className="menu-header">
            <Link to="/">
              <StaticImage
                src="../images/logo.svg"
                alt="Pura Sangre CrossFit"
              />
            </Link>
          </div>
          <div className="menu-nav">
            <Link to="/" activeClassName="active">
              Home
            </Link>
            <Link to="/#disciplines" onClick={menuTrigger}>
              Pura Sangre
            </Link>
            <Link to="/planes" activeClassName="active">
              Planes
            </Link>
            <Link to="/horarios" activeClassName="active">
              Horarios
            </Link>
            <a href="#contact" onClick={menuTrigger}>
              Contacto
            </a>
          </div>
          <div className="menu-footer">
            <p>
              <strong>Pura Sangre CrossFit</strong>
              <br />
              Camino a Zapallar con ruta 5 sur
              <br />
              +569 402 07 699
              <br />
              contacto@purasangrecrossfit.cl
            </p>
            <p>
              <strong>Lunes a Viernes</strong>
              <br />
              06:00 a 14:15 hrs - 16:00 a 22:00 hrs
            </p>
            <p>
              <strong>Sábados</strong>
              <br />
              8:30 a 13:00 hrs
            </p>
            <a
              className="button pink"
              target="_blank"
              rel="noreferrer noopener"
              href="https://wa.me/56940207699?text=Hola"
            >
              <WhatsappIcon />
              Contáctanos via Whatsapp &gt;
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
