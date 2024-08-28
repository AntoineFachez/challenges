import { useState } from "react";
import "./FavoriteButton.css";
import StarFilled from "./star-filled.svg?react";
import Star from "./star.svg?react";

export default function FavoriteButton({ isFavorite }) {
  const [favoriteState, setFavoriteState] = useState(isFavorite);

  return (
    <button
      className="favorite-button"
      onClick={() => {
        setFavoriteState(!favoriteState);
      }}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
