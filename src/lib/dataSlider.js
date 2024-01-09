import { v4 as uuidv4 } from "uuid";

const dataSlider = [
  {
    id: uuidv4(),
    img: "./slider-back-1.webp",
    data: {
      pretitle: "Bienvenido a",
      title:
        "<span class=italic>La comunidad fitness</span><br /> <span class=color-turquoiseBlue>más grande de la vii región</span>",
      button: {
        text: "Contrata ahora",
        link: "planes",
      },
    },
  },
  {
    id: uuidv4(),
    img: "./slider-back-2.webp",
    data: {
      // pretitle: "Bienvenido a",
      title:
        "<span class=italic>Encuentra un</span> <span class=color-turquoiseBlue>Horario para ti</span>",
      button: {
        text: "Explora nuestros horarios",
        link: "horarios",
      },
    },
  },
  {
    id: uuidv4(),
    img: "./slider-back-3.webp",
    data: {
      pretitle: "Contrata aquí",
      title: "Un plan <span class=color-turquoiseBlue>a tu medida</span>",
      button: {
        text: "Ver planes",
        link: "planes",
      },
    },
  },
  // {
  //   id: uuidv4(),
  //   title: "Lorem ipsum",
  //   subTitle: "Lorem",
  //   img: "https://images.unsplash.com/photo-1421218108559-eb1ff78357f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",
  //   data: {
  //     pretitle: "Hola",
  //     title: "Horarios",
  //     button: {
  //       text: "Click aqui",
  //       link: "/horarios",
  //     },
  //   },
  // },
];

export default dataSlider;
