import React, { useState } from "react";

import dataSchedules from "../lib/dataSchedules";

import "../styles/schedules.sass";

const Schedules = () => {
  const [schedules, setSchedules] = useState(
    dataSchedules[0].schedules.map((item) => {
      return { ...item, membershipsShow: false };
    })
  );

  const [firstClick, setOnFirstClick] = useState(true);

  // console.log(schedules);

  const openAvailablePlans = (index) => {
    if (firstClick) {
      setSchedules(
        schedules.map((item, i) => {
          if (i === index) {
            return { ...item, membershipsShow: true };
          } else {
            return { ...item, membershipsShow: false };
          }
        })
      );
      setOnFirstClick(false);
    } else {
      setSchedules(
        schedules.map((item, i) => {
          return { ...item, membershipsShow: false };
        })
      );
      setOnFirstClick(true);
    }
  };

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
      <div className="schedule-table">
        <div className="days">
          <div className="head">
            <h5>Lunes a Viernes</h5>
          </div>
          {schedules.map((schedule, index) => {
            return (
              <div className="card" key={index}>
                <div className="card-head">
                  <p className="hour">{schedule.hour}</p>
                  <p className="discipline">{schedule.discipline}</p>
                  <div
                    className={`arrow ${
                      schedule.membershipsShow ? "opened" : ""
                    }`}
                    onClick={() => openAvailablePlans(index)}
                  >
                    ▶
                  </div>
                </div>
                <div
                  className={`card-memberships ${
                    schedule.membershipsShow ? "show" : ""
                  }`}
                >
                  <p
                    className={`membership ${
                      schedule.memberships.full && "active"
                    }`}
                  >
                    FULL
                  </p>
                  <p
                    className={`membership ${
                      schedule.memberships.doce && "active"
                    }`}
                  >
                    12
                  </p>
                  <p
                    className={`membership ${
                      schedule.memberships.ocho && "active"
                    }`}
                  >
                    8
                  </p>
                  <p
                    className={`membership ${
                      schedule.memberships.am && "active"
                    }`}
                  >
                    AM
                  </p>
                  <p
                    className={`membership ${
                      schedule.memberships.lunch && "active"
                    }`}
                  >
                    LUNCH
                  </p>
                  <p
                    className={`membership ${
                      schedule.memberships.est && "active"
                    }`}
                  >
                    EST
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="days">
          <div className="head">
            <h5>Sábados</h5>
          </div>
          <div className="card">
            <div className="card-head">
              <p className="hour">07:00 hrs</p>
              <p className="discipline">CrossFit</p>
              <div className="arrow opened">▶</div>
            </div>
            <div className="card-memberships show">
              <p className="membership active">FULL</p>
              <p className="membership active">12</p>
              <p className="membership active">8</p>
              <p className="membership active">AM</p>
              <p className="membership">LUNCH</p>
              <p className="membership">EST</p>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              <p className="hour">08:00 hrs</p>
              <p className="discipline">CrossFit</p>
              <div className="arrow">▶</div>
            </div>
            <div className="card-memberships">
              <p className="membership active">FULL</p>
              <p className="membership active">12</p>
              <p className="membership active">8</p>
              <p className="membership active">AM</p>
              <p className="membership">LUNCH</p>
              <p className="membership">EST</p>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              <p className="hour">09:00 hrs</p>
              <p className="discipline">CrossFit</p>
              <div className="arrow">▶</div>
            </div>
            <div className="card-memberships">
              <p className="membership active">FULL</p>
              <p className="membership active">12</p>
              <p className="membership active">8</p>
              <p className="membership active">AM</p>
              <p className="membership">LUNCH</p>
              <p className="membership">EST</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedules;
