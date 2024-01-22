import React, { useState } from "react";
import { dataSchedules } from "../lib/dataSchedules";
import "../styles/schedules.sass";

const Schedules = () => {
  const generateID = () => {
    const date = Date.now();
    const random = Math.random().toString(36).substr(2);
    return date + random;
  };

  console.log();
  const scheduleCols = dataSchedules.cols;

  const [schedules, setSchedules] = useState(
    scheduleCols.map((item) => {
      const elem = item.map((e) => {
        return {
          title: e.title,
          schedules: e.schedules.map((schedule) => {
            return {
              hour: schedule.hour,
              discipline: schedule.discipline,
              memberships: schedule.memberships,
              span: schedule.span,
              id: generateID(),
              noContent: schedule.noContent ? schedule.noContent : false,
            };
          }),
        };
      });
      return elem;
    })
  );

  const [firstClick, setOnFirstClick] = useState(true);

  const openAvailablePlans = (index) => {
    if (firstClick) {
      setSchedules(
        schedules.map((item) => {
          return item.map((e) => {
            return {
              title: e.title,
              schedules: e.schedules.map((schedule) => {
                if (schedule.id === index) {
                  return { ...schedule, membershipsShow: true };
                } else {
                  return { ...schedule, membershipsShow: false };
                }
              }),
            };
          });
        })
      );
      setOnFirstClick(false);
    } else {
      setSchedules(
        schedules.map((item) => {
          return item.map((e) => {
            return {
              title: e.title,
              schedules: e.schedules.map((schedule) => {
                return {
                  ...schedule,
                  membershipsShow: false,
                };
              }),
            };
          });
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
        {schedules.map((col, colIndex) => (
          <div key={colIndex} className="days">
            {col.map((day, dayIndex) => (
              <div key={`${colIndex}-${dayIndex}`}>
                <div className="head">
                  <h5>{day.title}</h5>
                  <p>Planes disponibles por horario</p>
                </div>
                {day.schedules.map((schedule, scheduleIndex) => (
                  <div key={`${colIndex}-${dayIndex}-${scheduleIndex}`}>
                    {schedule.noContent ? (
                      <div
                        className={`card noContent ${
                          schedule.span > 1 ? "span-" + schedule.span : ""
                        }`}
                      ></div>
                    ) : (
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
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedules;
