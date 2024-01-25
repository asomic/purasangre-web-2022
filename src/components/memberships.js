import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

import MembershipCard from "./MembershipCard";

import "../styles/memberships.sass";

const Memberships = ({ summarized, title, moreLink }) => {
  // Client-side Runtime Data Fetching
  const [membershipsData, setMembershipsData] = useState(0);

  useEffect(() => {
    // get data from GitHub api
    fetch(`https://admin.purasangrecrossfit.cl/api/planes/contractables`)
      .then((response) => response.json()) // parse JSON from request
      .then((resultData) => {
        const getFullPlans = () => {
          const filteredPlans = resultData.plans.filter((item) =>
            item.plan.startsWith("Full")
          );
          const result = filteredPlans.map((item) => {
            return {
              id: item.id,
              name: item.period,
              price: item.amount,
              buyable: true,
            };
          });


          return filteredPlans[0] ? [
            {
              info: {
                name: "Full",
                hours: filteredPlans[0] ? filteredPlans[0].schedule_hours : '',
                days: filteredPlans[0].schedule_days,
              },
              periods: {
                result,
              },
            },
          ] : [];
        };

        const getDoceClases = () => {
          const filteredPlans = resultData.plans.filter((item) => {
            if (
              item.plan.startsWith("12 clases") ||
              item.plan.startsWith("medium")
            ) {
              return item;
            }
          });
          const result = filteredPlans.map((item) => {
            return {
              id: item.id,
              name: item.period,
              price: item.amount,
              buyable: true,
            };
          });
            return filteredPlans[0] ? [
            {
              info: {
                name: "Medium",
                hours: filteredPlans[0].schedule_hours,
                days: filteredPlans[0].schedule_days,
              },
              periods: {
                result,
              },
            },
          ] : [];
        };

        const getOchoClases = () => {
          const filteredPlans = resultData.plans.filter((item) => {
            if (
              item.plan.startsWith("8 Sesiones") ||
              item.plan.startsWith("small")
            ) {
              return item;
            }
          });
          const result = filteredPlans.map((item) => {
            return {
              id: item.id,
              name: item.period,
              price: item.amount,
              buyable: true,
            };
          });

            return filteredPlans[0] ? [
            {
              info: {
                name: "Small",
                hours: filteredPlans[0].schedule_hours,
                days: filteredPlans[0].schedule_days,
              },
              periods: {
                result,
              },
            },
          ] : [];
        };

        const getEstudiantesClases = () => {
          const filteredPlans = resultData.plans.filter((item) =>
            item.plan.startsWith("Plan Estudiante")
          );
          const result = filteredPlans.map((item) => {
            return {
              id: item.id,
              name: item.period,
              price: item.amount,
              buyable: true,
            };
          });

            return filteredPlans[0] ? [
            {
              info: {
                name: "Estudiante",
                hours: filteredPlans[0].schedule_hours,
                days: filteredPlans[0].schedule_days,
              },
              periods: {
                result,
              },
            },
          ] : [];
        };

        const getValle = () => {
          const filteredPlans = resultData.plans.filter((item) =>
            item.plan.startsWith("PLAN VALLE")
          );
          const result = filteredPlans.map((item) => {
            return {
              id: item.id,
              name: item.period,
              price: item.amount,
              buyable: true,
            };
          });

          return filteredPlans[0]
            ? [
                {
                  info: {
                    name: "Valle",
                    hours: filteredPlans[0].schedule_hours,
                    days: filteredPlans[0].schedule_days,
                  },
                  periods: {
                    result,
                  },
                },
              ]
            : [];
        };

        const getPersonalizado = () => {
          const filteredPlans = resultData.plans.filter((item) =>
            item.plan.startsWith("Plan Personalizado")
          );
          const result = filteredPlans.map((item) => {
            return {
              id: item.id,
              name: item.period,
              price: 150000,
              buyable: false,
            };
          });

            return filteredPlans[0] ? [
            {
              info: {
                name: "Personalizado",
                hours: "",
                days: "Enfocado en lograr tus objetivos con una planificación hecha exclusivamente para ti por profesionales del CrossFit. El coach estará siempre a tu lado, te irá enseñando, corrigiendo y motivando 1 a 1, para lograr tu mejor versión. Horario a convenir con el coach.",
              },
              periods: {
                result: [
                  {
                    buyable: false,
                    id: 27,
                    name: "mes (3 veces por semana)",
                    price: 150000,
                  },
                  {
                    buyable: false,
                    id: 27,
                    name: "mes (5 veces por semana)",
                    price: 180000,
                  },
                ],
              },
            },
          ] : [];
        };

        const thePlans = [
          ...getFullPlans(),
          ...getDoceClases(),
          ...getOchoClases(),
          ...getEstudiantesClases(),
          ...getValle(),
          ...getPersonalizado(),
        ];
        setMembershipsData(thePlans);
      });
  }, []);

  return (
    <section className={`memberships ${summarized ? "onIndex" : "notIndex"}`}>
      <div className="memberships-header">
        <h1 className="color-turquoiseBlue">{title}</h1>
      </div>
      <div className="memberships-cards">
        {/* Card */}
        {summarized
          ? membershipsData &&
            membershipsData
              .slice(0, 6)
              .map((item, index) => (
                <MembershipCard
                  memberships={item}
                  summarized={summarized}
                  key={index}
                />
              ))
          : membershipsData &&
            membershipsData.map((item, index) => (
              <MembershipCard memberships={item} key={index} />
            ))}
      </div>
      {moreLink && (
        <Link to="/planes" className="button pink">
          Ver todos los planes &gt;
        </Link>
      )}
    </section>
  );
};

export default Memberships;
