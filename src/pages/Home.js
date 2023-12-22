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
    <main>
      {pokemons.map((pokemon) => (
        <Card pokemon={pokemon} />
      ))}
    </main>
  );
};
