import React, { useEffect, useState } from "react";

export const Header = () => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    async function fetchTypes() {
      const data = await fetch("https://pokeapi.co/api/v2/type");
      const jsonData = await data.json();

      setTypes(jsonData.results);
      types.sort();
    }
    fetchTypes();
  }, []);
  return (
    <header>
      <div className="h-16 items-center border-b-2 my-4">
        <form className="flex justify-around">
          <input
            className="px-2 py-1 border rounded"
            type="text"
            name="search"
            id="search"
            placeholder="search"
            autoComplete="off"
          />

          <select name="type" id="type">
            {types.map((type) => (
              <option key={type.url} value={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        </form>
      </div>
    </header>
  );
};
