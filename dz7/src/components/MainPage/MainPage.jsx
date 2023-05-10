import React from "react";
import { useState, useEffect } from "react";
import PokemonCard from "../PokemonCards/PokemonCard";
import { fetchPokemons } from "../api/getPokemons";
import Pagination from "../Pagination/Pagination";

function MainPage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(1);
  const [count, setCount] = useState(1);
  const [page, setPage] = useState(1);

  const limit = 10;

  useEffect(() => {
    fetchPokemons(limit, offset).then((data) => {
      setPokemonList([...data]);
      const pageCount = Math.ceil(data.count / limit);
      setCount(pageCount);
    });
  }, [offset]);

  const handleNext = () => {
    if (page === count) return;
    setOffset((prev) => prev + limit);
    setPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (page === 1) return;
    setOffset((prev) => prev - limit);
    setPage((prev) => prev - 1);
  };

  return (
    <div className="container">
      <div className="all"></div>
      <div className="pokemonList">
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <Pagination
        page={page}
        count={count}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
}

export default MainPage;
