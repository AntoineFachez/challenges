import { cardsData } from "../../data/data.js";
import { Header } from "../Header/Header.js";
import { Form } from "../Form/Form.js";
import { CardList } from "../CardList/CardList.js";

export const App = () => {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(cardsData), CardList(cardsData));
  return app;
};
