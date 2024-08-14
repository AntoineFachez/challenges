import { Square } from "./components/Square/Square.js";
import { Circle } from "./components/Circle/Circle.js";
import { Pentagon } from "./components/Pentagon/Pentagon.js";

console.clear();

const root = document.getElementById("root");

const square = Square();
const circle = Circle();
const pentagon = Pentagon();

root.append(circle, square, pentagon);
