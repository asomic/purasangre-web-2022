import React, { useState } from "react";
import dataSchedules from "../lib/dataSchedules";
import {
  // leftCol,
  // rightCol,
  schedule as scheduleCols,
} from "../lib/dataSchedules2";
import "../styles/schedules.sass";

const Schedules = () => {
  const generateID = () => {
    const date = Date.now();
    const random = Math.random().toString(36).substr(2);
    return date + random;
  };

  const [schedules, setSchedules] = useState(
    scheduleCols.map((item) => {
      return {
        title: item.title,
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
        scheduleCols.map((item) => {
          return {
            title: item.title,
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
        scheduleCols.map((item) => {
          return {
            title: item.title,
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
            <span>valle</span>Plan Valle
          </p>
          <p>
            <span>est</span>plan estudiante
          </p>
        </div>
      </div>

      <div className="schedule-table">
        {scheduleCols.cols.map((col, colIndex) => (
          <div key={colIndex} className="days">
            {col.map((day, dayIndex) => (
              <div key={`${colIndex}-${dayIndex}`}>
                <div className="head">
                  <h5>{day.title}</h5>
                  <p>Planes disponibles por horario</p>
                </div>
                {day.schedules.map((schedule, scheduleIndex) => (
                  <div key={`${colIndex}-${dayIndex}-${scheduleIndex}`}>
                    <div
                      className={`card ${
                        schedule.span > 1 ? "span-" + schedule.span : ""
                      }`}
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
                          <img
                            src="/icon-arrow-down.png"
                            alt="ícono de flecha"
                          />
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
                            schedule.memberships.valle && "active"
                          }`}
                        >
                          VALLE
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
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* <div className="schedule-table">
        <div className="days">
          {leftCol.map((days, i) => (
            <div key={i}>
              <div className="head">
                <h5>{days.title}</h5>
                <p>Planes disponibles por horario</p>
              </div>
              {days.schedules.map((schedule, i) => (
                <div key={i}>
                  <div
                    className={`card ${
                      schedule.span > 1 ? "span-" + schedule.span : ""
                    }`}
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
                          schedule.memberships.valle && "active"
                        }`}
                      >
                        VALLE
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
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="days">
          {rightCol.map((days, i) => (
            <div key={i}>
              <div className="head">
                <h5>{days.title}</h5>
                <p>Planes disponibles por horario</p>
              </div>
              {days.schedules.map((schedule, i) => (
                <>
                  <div
                    className={`card ${
                      schedule.span > 1 ? "span-" + schedule.span : ""
                    }`}
                    key={i}
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
                          schedule.memberships.valle && "active"
                        }`}
                      >
                        VALLE
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
                </>
              ))}
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default Schedules;
