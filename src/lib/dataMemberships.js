import { v4 as uuidv4 } from "uuid";

const dataMemberships = [
  {
    id: uuidv4(),
    name: "Full",
    days: "1 clase por día",
    hours: "Cualquier horario",
    periods: [
      {
        name: "mes",
        price: 50000,
        purchaseLink: "/",
      },
      {
        name: "3 meses",
        price: 135000,
        purchaseLink: "/",
      },
      {
        name: "6 meses",
        price: 255000,
        purchaseLink: "/",
      },
      {
        name: "año",
        price: 480000,
        purchaseLink: "/",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "12 clases",
    days: "1 clase por día — 12 clases al mes",
    hours: "Cualquier horario",
    periods: [
      {
        name: "mes",
        price: 45000,
        purchaseLink: "/",
      },
      {
        name: "3 meses",
        price: 121500,
        purchaseLink: "/",
      },
      {
        name: "6 meses",
        price: 229500,
        purchaseLink: "/",
      },
      {
        name: "año",
        price: 432000,
        purchaseLink: "/",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "AM",
    days: "1 clase por día",
    hours: "Entre 09:00 - 11:00 y 12:00 hrs",
    periods: [
      {
        name: "mes",
        price: 30000,
        purchaseLink: "/",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "8 Sesiones",
    days: "1 clase por día — 8 clases al mes",
    hours: "Cualquier horario",
    periods: [
      {
        name: "mes",
        price: 40000,
        purchaseLink: "/",
      },
      {
        name: "3 meses",
        price: 108000,
        purchaseLink: "/",
      },
      {
        name: "6 meses",
        price: 204000,
        purchaseLink: "/",
      },
      {
        name: "año",
        price: 384000,
        purchaseLink: "/",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Lunch",
    days: "1 clase por día",
    hours: "Entre 13:00 - 16:00 y 17:00 hrs",
    periods: [
      {
        name: "mes",
        price: 33000,
        purchaseLink: "/",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Estudiante",
    days: "1 clase por día",
    hours: "Cualquier horario hasta las 18:00 hrs",
    periods: [
      {
        name: "mes",
        price: 30000,
        purchaseLink: "/",
      },
    ],
  },
];

export default dataMemberships;
