import React, { useState } from "react";
import dataSchedules from "../lib/dataSchedules";
import "../styles/schedules.sass";

const Schedules = () => {
  const generateID = () => {
    const date = Date.now();
    const random = Math.random().toString(36).substr(2);
    return date + random;
  };

  const [schedules, setSchedules] = useState(
    dataSchedules.map((item) => {
      return {
        forDays: item.forDays,
        priority: item.priority,
        schedules: item.schedules.map((item) => {
          return {
            id: generateID(),
            hour: item.hour,
            discipline: item.discipline,
            memberships: item.memberships,
            span: item.span,
            noContent: item.noContent ? item.noContent : false,
          };
        }),
        membershipsShow: false,
      };
    })
  );

  const [firstClick, setOnFirstClick] = useState(true);

  const openAvailablePlans = (index) => {
    if (firstClick) {
      setSchedules(
        schedules.map((item) => {
          return {
            forDays: item.forDays,
            priority: item.priority,
            schedules: item.schedules.map((item) => {
              if (item.id === index) {
                return { ...item, membershipsShow: true };
              } else {
                return { ...item, membershipsShow: false };
              }
            }),
          };
        })
      );
      setOnFirstClick(false);
    } else {
      setSchedules(
        schedules.map((item) => {
          return {
            forDays: item.forDays,
            priority: item.priority,
            schedules: item.schedules.map((item) => {
              return {
                ...item,
                membershipsShow: false,
              };
            }),
          };
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
            <span>M</span>plan medium
          </p>
          <p>
            <span>S</span>plan small
          </p>
          <p>
            <span>6AM</span>Plan 6 AM
          </p>
          <p>
            <span>AM</span>plan am
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
        {schedules.map((days, index) => {
          console.log(days);
          return (
            <div className="days" key={index}>
              <div className="head">
                <h5>{days.forDays}</h5>
                <p>Planes disponibles por horario</p>
              </div>
              {days.schedules.map((schedule) =>
                schedule.noContent ? (
                  <div
                    className={`card noContent ${
                      schedule.span > 1 ? "span-" + schedule.span : ""
                    }`}
                    key={schedule.id}
                  ></div>
                ) : (
                  <div
                    className={`card ${
                      schedule.span > 1 ? "span-" + schedule.span : ""
                    }`}
                    key={schedule.id}
                  >
                    <div className="card-head">
                      <p className="hour">{schedule.hour}</p>
                      <p className="discipline">{schedule.discipline}</p>
                      <div
                        className={`arrow ${
                          schedule.membershipsShow ? "opened" : ""
                        }`}
                        onClick={() => openAvailablePlans(schedule.id)}
                      >
                        <img src="/icon-arrow-down.png" alt="ícono de flecha" />
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
                        M
                      </p>
                      <p
                        className={`membership ${
                          schedule.memberships.ocho && "active"
                        }`}
                      >
                        S
                      </p>
                      <p
                        className={`membership ${
                          schedule.memberships.seis && "active"
                        }`}
                      >
                        6AM
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
                )
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Schedules;
