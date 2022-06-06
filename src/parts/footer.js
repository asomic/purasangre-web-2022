import * as React from "react";

import styles from "../styles/footer.sass";

import emblemIcon from "../images/emblem.svg";
import crossfitJournalIcon from "../images/crossfit-journal.png";
import instagramIcon from "../images/instagram.svg";
import facebookIcon from "../images/facebook.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="brands">
          <div className="brand">
            <img src={emblemIcon} alt="Emblema Pura Sangre CrossFit" />
          </div>
          <div className="certified">
            <a
              href="http://journal.crossfit.com/start.tpl?version=CFJ-white123x63"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={crossfitJournalIcon} />
            </a>
          </div>
        </div>
        <div className="credits-wrapper">
          <div className="rrss">
            <a
              href="https://www.instagram.com/purasangrecf/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={instagramIcon} />
            </a>
            <a
              href="https://www.facebook.com/purasangrecrossfit/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={facebookIcon} />
            </a>
          </div>
        </div>
      </div>
      <div className="credits">
        <p>
          <a href="/contrato.pdf" target="_blank" rel="noreferrer noopener">
            Reglamento y contrato Pura Sangre CrossFit
          </a>
        </p>
        <p>
          <span>Hecho en Curicó por</span>{" "}
          <a href="https://asomic.com">asomic</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
