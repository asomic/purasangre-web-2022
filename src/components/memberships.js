import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

import dataMemberships from "../lib/dataMemberships";
import MembershipCard from "../components/MembershipCard";

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

          const content = [
            {
              info: {
                name: "Full",
                hours: filteredPlans[0].schedule_hours,
                days: filteredPlans[0].schedule_days,
              },
              periods: {
                result,
              },
            },
          ];

          return content;
        };

        const getDoceClases = () => {
          const filteredPlans = resultData.plans.filter((item) =>
            item.plan.startsWith("12 clases")
          );
          const result = filteredPlans.map((item) => {
            return {
              id: item.id,
              name: item.period,
              price: item.amount,
              buyable: true,
            };
          });

          const content = [
            {
              info: {
                name: "12 Clases",
                hours: filteredPlans[0].schedule_hours,
                days: filteredPlans[0].schedule_days,
              },
              periods: {
                result,
              },
            },
          ];

          return content;
        };

        const getAmClases = () => {
          const filteredPlans = resultData.plans.filter((item) =>
            item.plan.startsWith("AM")
          );
          const result = filteredPlans.map((item) => {
            return {
              id: item.id,
              name: item.period,
              price: item.amount,
              buyable: true,
            };
          });

          const content = [
            {
              info: {
                name: "AM",
                hours: filteredPlans[0].schedule_hours,
                days: filteredPlans[0].schedule_days,
              },
              periods: {
                result,
              },
            },
          ];

          return content;
        };

        const getOchoClases = () => {
          const filteredPlans = resultData.plans.filter((item) =>
            item.plan.startsWith("8 Sesiones")
          );
          const result = filteredPlans.map((item) => {
            return {
              id: item.id,
              name: item.period,
              price: item.amount,
              buyable: true,
            };
          });

          const content = [
            {
              info: {
                name: "8 Sesiones",
                hours: filteredPlans[0].schedule_hours,
                days: filteredPlans[0].schedule_days,
              },
              periods: {
                result,
              },
            },
          ];

          return content;
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

          const content = [
            {
              info: {
                name: "Plan Estudiante",
                hours: filteredPlans[0].schedule_hours,
                days: filteredPlans[0].schedule_days,
              },
              periods: {
                result,
              },
            },
          ];

          return content;
        };

        const getLunchClases = () => {
          const filteredPlans = resultData.plans.filter((item) =>
            item.plan.startsWith("Lunch")
          );
          const result = filteredPlans.map((item) => {
            return {
              id: item.id,
              name: item.period,
              price: item.amount,
              buyable: true,
            };
          });

          const content = [
            {
              info: {
                name: "Lunch",
                hours: filteredPlans[0].schedule_hours,
                days: filteredPlans[0].schedule_days,
              },
              periods: {
                result,
              },
            },
          ];

          return content;
        };

        const getPersonalizado = () => {
          const filteredPlans = resultData.plans.filter((item) =>
            item.plan.startsWith("Plan Personalizado")
          );
          const result = filteredPlans.map((item) => {
            return {
              id: item.id,
              name: item.period,
              price: 130000,
              buyable: false,
            };
          });

          const content = [
            {
              info: {
                name: "Plan Personalizado",
                hours: "Horario a convenir con el coach",
                days: "Incluye un mes de asesoria nutricional",
              },
              periods: {
                result,
              },
            },
          ];

          return content;
        };

        const thePlans = [
          ...getFullPlans(),
          ...getDoceClases(),
          ...getOchoClases(),
          ...getAmClases(),
          ...getLunchClases(),
          ...getEstudiantesClases(),
          ...getPersonalizado(),
        ];
        setMembershipsData(thePlans);
      });
  }, []);

  return (
    <section className="memberships">
      <div className="memberships-header">
        <h1 className="color-turquoiseBlue">{title}</h1>
      </div>
      <div className="memberships-cards">
        {/* Card */}
        {summarized
          ? membershipsData &&
            membershipsData
              .slice(0, 5)
              .map((item, index) => (
                <MembershipCard
                  memberships={item}
                  summarized={summarized}
                  key={index}
                />
              ))
          : membershipsData &&
            membershipsData.map((item, index) => (
              <MembershipCard
                memberships={item}
                // summarized={summarized}
                key={index}
              />
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
