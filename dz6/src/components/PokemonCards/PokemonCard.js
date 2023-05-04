import React from "react";
import s from "./Pokemon.module.css";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className={s.pokemonCard}>
      <div className={s.insideBlock}>
        <div className={s.pokemonName}>{pokemon.name}</div>
      </div>
      <img className={s.pokStyle} src={pokemon.image} alt="" />
    </div>
  );
};

export default PokemonCard;
