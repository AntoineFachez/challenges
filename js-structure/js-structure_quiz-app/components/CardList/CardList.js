import { Card } from "../Card/Card.js";

export function CardList(cardsData) {
  console.log(cardsData);

  const cardList = document.createElement("section");
  cardList.classList.add("card-list");

  cardsData.forEach((card) => {
    const cardElement = Card(card);
    cardList.append(cardElement);
  });

  return cardList;
}
