import { Card } from "../components/Card/Card.js";
import { renderElement } from "./utils.js";

console.clear();

// --v-- your code below this line --v--

const url = "https://swapi.py4e.com/api/people";

const fetchDataAndRender = async () => {
  try {
    await fetch(url).then(async (response) => {
      var data = await response.json();
      console.log(data.results);

      data.results.forEach((element) => {
        const createElement = Card(element);
        renderElement(createElement);
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};
fetchDataAndRender();
