import React, { useState, useEffect } from "react";
import Map from "./Map";
import InstaFeed from "./instaFeed";

import "../styles/contact.sass";

import WhatsappIcon from "./whatsappIcon";

const location = {
  address:
    "Longitudinal Sur, Km 189 Caletera Oriente, Cruce Zapallar Curicó, Maule",
  lat: -34.9842245,
  lng: -71.2184862,
};

const IG_API_URL = "https://www.instagram.com/graphql/query/";
const IG_POST_URL = "https://www.instagram.com/p";
const queryHash = "d4d88dc1500312af6f937f7b804c68c3";
const imagesPerPage = 6;

const Contact = () => {
  const [insta, setInsta] = useState([]);

  return (
    <>
      <InstaFeed />
      <section className="contact" id="contact">
        <div className="contactInner">
          <div className="map">
            <Map location={location} zoomLevel={15.2} />
          </div>
          <div className="data">
            <h1 className="color-turquoiseBlue">Entrena con nosotros</h1>
            <p>
              <span className="bold">Pura Sangre CrossFit</span>
              <br />
              Camino a Zapallar con ruta 5 sur
              <br />
              +569 402 07 699
              <br />
              contacto@purasangrecrossfit.cl
            </p>
            <p>
              <span className="bold">Lunes a Viernes</span>
              <br />
              06:00 a 14:15 hrs - 16:00 a 22:00 hrs
            </p>
            <p>
              <span className="bold">Sábados</span> <br />
              8:30 a 13:00 hrs
            </p>
            <a
              href="https://wa.me/56940207699?text=Hola,%20quiero%20unirme%20a%20Pura%20Sangre%20CrossFit%20🔥"
              className="button pink"
              target="_blank"
              rel="noreferrer noopener"
            >
              {/* <img src={WhatsappIcon} /> */}
              <WhatsappIcon />
              Contáctanos via Whatsapp &gt;
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
