import { v4 as uuidv4 } from "uuid";

const dataSlider = [
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    img: "https://images.unsplash.com/photo-1421218108559-eb1ff78357f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",
    data: {
      pretitle: "Hola",
      title: "Bienvenido a <span>La comunidad fitness</span>",
      //   button: {
      //     text: "Click aqui",
      //     link: "/horarios",
      //   },
    },
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    img: "https://images.unsplash.com/photo-1416862291207-4ca732144d83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1767&q=80",
    data: {
      //   pretitle: "Pretitulo",
      title: "Este es un titulo",
      button: {
        text: "Haz click",
        link: "/planes",
      },
    },
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum",
    subTitle: "Lorem",
    img: "https://images.unsplash.com/photo-1421218108559-eb1ff78357f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80",
    data: {
      pretitle: "Hola",
      title: "Horarios",
      button: {
        text: "Click aqui",
        link: "/horarios",
      },
    },
  },
];

export default dataSlider;
