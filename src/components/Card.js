import React, { useEffect, useState } from "react";

export const Card = ({ pokemon }) => {
  const [data, setData] = useState({});
  console.log("url", pokemon.url);
  console.log(pokemon.name);
  useEffect(() => {
    async function fetchPokemon() {
      const data = await fetch(pokemon.url);
      //   console.log(data);
      const jsonData = await data.json();
      console.log(jsonData);
      setData(jsonData);
    }
    fetchPokemon();
  }, []);
  const { id, types } = data;
  console.log("card: ", data);
  return (
    <section>
      <div>
        {/* <h2>{name}</h2> */}
        <span>ID: {id}</span>
        {/* <span>Type: {types.type.name}</span> */}
      </div>
      <img
        src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`}
        alt="demo name"
      />
    </section>
  );
};
