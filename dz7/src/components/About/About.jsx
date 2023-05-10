import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemons } from "../api/getPokemons";
import s from "./About.module.css";

const About = () => {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetchPokemons().then((data) =>
      setPokemonData(data.find((p) => p.id.toString() === id))
    );
  }, [id]);

  return (
    <div className={s.container}>
      <div className={s.image}>
        {pokemonData && (
          <img
            src={pokemonData.image}
            alt={pokemonData.name}
            className={s.pokemon}
          />
        )}
      </div>
      <div className={s.description}>
        <h1>{pokemonData?.name?.toUpperCase()}</h1>
        {pokemonData && (
          <div className={s.options}>
            <p>Level: {pokemonData.level}</p>
            <p>Attack: {pokemonData.attack}</p>
            <p>Speed: {pokemonData.speed}</p>
            <p>Weight: {pokemonData.weight}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
