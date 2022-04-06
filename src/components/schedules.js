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
        {schedules.map((days, index) => {
          return (
            <div className="days" key={index}>
              <div className="head">
                <h5>{days.forDays}</h5>
              </div>
              {days.schedules.map((schedule) => (
                <div className="card" key={schedule.id}>
                  <div className="card-head">
                    <p className="hour">{schedule.hour}</p>
                    <p className="discipline">{schedule.discipline}</p>
                    <div
                      className={`arrow ${
                        schedule.membershipsShow ? "opened" : ""
                      }`}
                      onClick={() => openAvailablePlans(schedule.id)}
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
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Schedules;
