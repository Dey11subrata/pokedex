import { useEffect, useState } from "react";
import { Card } from "../components/Card";

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    async function fetchPokemons() {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon");
      const jsonData = await data.json();
      setPokemons(jsonData.results);
      // console.log(jsonData.results);
    }
    fetchPokemons();
  }, []);
  // console.log(pokemons);
  return (
    <main className="m-auto">
      <div className="flex flex-wrap justify-between mx-2 px-1">
        {pokemons.map((pokemon) => (
          <Card key={pokemon.url} pokemon={pokemon} />
        ))}
      </div>
    </main>
  );
};
