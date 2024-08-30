import { useEffect, useState } from "react";
import "./PokemonList.css";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);

  async function loadPokemon() {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();
      setPokemon(data.results);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    loadPokemon();
    console.log(pokemon);

    return () => {};
  }, []);

  return (
    <main
      style={{
        width: "100%",
        height: "fit-content",
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "pi8nk",
      }}
    >
      {pokemon.map(({ name }) => (
        <div style={{ height: "fit-content" }} key={name} className="pokemon">
          {name}
        </div>
      ))}
    </main>
  );
}
