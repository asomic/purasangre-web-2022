import { v4 as uuidv4 } from "uuid";

const dataMemberships = [
  {
    id: uuidv4(),
    name: "Full Mensual",
    days: "1 clase por día",
    hours: "Cualquier horario",
    price: "50000",
    period: "mes",
    link: "/",
  },
  {
    id: uuidv4(),
    name: "12 clases",
    days: "1 clase por día — 12 clases al mes",
    hours: "Cualquier horario",
    price: "45000",
    period: "mes",
    link: "/",
  },
  {
    id: uuidv4(),
    name: "AM",
    days: "1 clase por día",
    hours: "Entre 09:00 - 11:00 y 12:00 hrs",
    price: "38000",
    period: "mes",
    link: "/",
  },
];

export default dataMemberships;
