import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Card = ({ pokemon }) => {
  const [data, setData] = useState({});
  //   const [type, setType] = useState([]);
  //   console.log("url", pokemon.url);
  //   console.log(pokemon.name);
  useEffect(() => {
    async function fetchPokemon() {
      const data = await fetch(pokemon.url);
      //   console.log(data);
      const jsonData = await data.json();
      //   console.log(jsonData);
      setData(jsonData);
    }
    fetchPokemon();
  }, []);
  const { id, types, name } = data;

  //   useEffect(() => {
  //     async function fetchType() {
  //       const data = await fetch(`https://pokeapi.co/api/v2/type/${data.id}`);
  //       const jsonData = await data.json();
  //       setType(jsonData.type);
  //     }
  //   });
  //   const property = type.name;
  //   console.log("property: ", types("type").name);
  //   console.log(types);
  return (
    <div className="flex flex-col border max-w-xl flex-wrap cursor-pointer ">
      <div className="flex justify-evenly items-center  ">
        <div className="p-2">
          <h2>{name}</h2>
          <p>ID: {id}</p>
          {types?.map((type) => (
            <p key={type.type.url}>{type.type.name}</p>
          ))}
          {/* <p>{types[0].type.name}</p> */}
        </div>
        <div>
          <img
            className="max-w-32"
            src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`}
            alt={name}
          />
        </div>
      </div>

      <div></div>
    </div>
  );
};
