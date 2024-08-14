import { getRandomColor } from "../../utils/randomColor.js";
export function Square() {
  console.log("init square");

  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("click", () => {
    const randomColor = getRandomColor();
    square.style.backgroundColor = randomColor;
  });
  return square;
}
