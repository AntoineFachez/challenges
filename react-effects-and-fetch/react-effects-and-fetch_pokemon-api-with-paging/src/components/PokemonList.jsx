import { useEffect, useState } from "react";
import "./PokemonList.css";

export default function PokemonList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemon, setPokemon] = useState([]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    const loadPokemon = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${(currentPage - 1) * 20}`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.error("Error fetching Pokemon:", error);
      }
    };

    loadPokemon();
  }, [currentPage]);

  return (
    <main>
      <button
        type="button"
        className="button"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Previous Page
      </button>
      <button
        type="button"
        className="button"
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next Page
      </button>
      <div>Page: {currentPage}</div>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name} className="pokemon">
            {name}
          </li>
        ))}
      </ul>
    </main>
  );
}
