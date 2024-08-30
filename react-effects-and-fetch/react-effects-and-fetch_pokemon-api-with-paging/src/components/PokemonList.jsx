import { useEffect, useState } from "react";
import "./PokemonList.css";

export default function PokemonList() {
  const [count, setCount] = useState(null);
  const [limit, setLimit] = useState(300);
  const [offset, setOffset] = useState(0);
  const [prevPage, setPrevPage] = useState(1);
  const [nextPage, setNextPage] = useState(1);
  const [pokemon, setPokemon] = useState([]);

  const loadPokemon = async (pageUrl) => {
    try {
      const response = await fetch(pageUrl);
      const data = await response.json();
      setCount(data.count);
      setPrevPage(data.previous);
      setNextPage(data.next);
      setOffset(nextPage ? getParams(nextPage) : null);
      setPokemon(data.results);
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
    }
    console.log(prevPage, nextPage);
  };
  useEffect(() => {
    loadPokemon(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );
  }, []);

  const getParams = (url) => {
    const parts = url.split("?");

    if (parts.length > 1) {
      const queryParams = parts[1];

      const paramsArray = queryParams.split("&");

      const offsetParam = paramsArray.find((param) =>
        param.startsWith("offset=")
      );

      if (offsetParam) {
        const offsetValue = offsetParam.split("=")[1];

        const offset = parseInt(offsetValue, 10);

        return offset;
      } else {
        console.log("Offset parameter not found in the URL.");
      }
    } else {
      console.log("No query parameters found in the URL.");
    }
  };

  return (
    <main>
      <button
        type="button"
        className="button"
        disabled={prevPage === null}
        onClick={() => loadPokemon(prevPage)}
      >
        Previous Page
      </button>
      <button
        type="button"
        disabled={nextPage === null}
        className="button"
        onClick={() => loadPokemon(nextPage)}
      >
        Next Page
      </button>
      <div>
        {offset}/ {count}
      </div>
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
