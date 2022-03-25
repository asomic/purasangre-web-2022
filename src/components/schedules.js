import React from "react";

import "../styles/schedules.sass";

const Schedules = () => {
  return (
    <section className="schedules">
      <div className="explanation">
        <p className="title">Abreviatura Planes</p>
        <div className="explanation-content">
          <p>
            <span>Full</span>Plan Full
          </p>
          <p>
            <span>12</span>plan 12 clases
          </p>
          <p>
            <span>8</span>plan 8 sesiones
          </p>
          <p>
            <span>am</span>plan am
          </p>
          <p>
            <span>lunch</span>plan lunch
          </p>
          <p>
            <span>est</span>plan estudiante
          </p>
        </div>
      </div>
      <div className="schedule-table"></div>
    </section>
  );
};

export default Schedules;
