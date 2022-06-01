import React from "react";

import "../styles/instafeed.sass";

import instagramIcon from "../images/instagram-color.svg";

const InstaFeed = () => {
  return (
    <section className="rrssContainer">
      <div className="header">
        <h1>
          <span className="italic">Síguenos en&nbsp;</span>
          <img src={instagramIcon} />
        </h1>
      </div>
      <iframe
        src="https://cdn.lightwidget.com/widgets/24eb3c2ebeaa5b7cbc26dde5d1057da5.html"
        scrolling="no"
        allowtransparency="true"
        class="lightwidget-widget"
      ></iframe>
    </section>
  );
};

export default InstaFeed;
