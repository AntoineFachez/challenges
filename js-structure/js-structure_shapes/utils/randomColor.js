export function getRandomColor() {
  console.log("clicked");

  return `hsl(${Math.floor(Math.random() * 360)} 80% 55%)`;
}
