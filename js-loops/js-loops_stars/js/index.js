console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');
let filledStars = 0;
function renderStars(starsAmount) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let rating = 1; rating <= 5; rating++) {
    const star = document.createElement("img");
    star.addEventListener("click", () => fillStars(rating));
    if (starsAmount < rating) {
      star.src = "assets/star-empty.svg";
    } else {
      star.src = "assets/star-filled.svg";
    }
    star.alt = "star";

    starContainer.append(star);
  }
  //--^-- your code here --^--
}

renderStars(filledStars);
function fillStars(rating) {
  console.log(filledStars);

  filledStars = rating;
  renderStars(filledStars);
  return filledStars;
}
