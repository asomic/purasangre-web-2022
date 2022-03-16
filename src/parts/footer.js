import * as React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <div className="brands">
          <div className="brand">
            <img
              src="/static/images/emblem.svg"
              alt="Emblema Pura Sangre CrossFit"
            />
          </div>
          <div className="certified">
            <a
              href="http://journal.crossfit.com/start.tpl?version=CFJ-white123x63"
              target="_blank"
            >
              <img src="/static/images/crossfit-journal.png" />
            </a>
          </div>
        </div>
        <div className="credits-wrapper">
          <div className="rrss">
            <a href="https://www.instagram.com/purasangrecf/" target="_blank">
              <img src="/static/images/instagram.svg" />
            </a>
            <a
              href="https://www.facebook.com/purasangrecrossfit/"
              target="_blank"
            >
              <img src="/static/images/facebook.svg" />
            </a>
          </div>
          <div className="credits">
            <p>
              Hecho en Curicó por <a href="https://asomic.com">asomic</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
