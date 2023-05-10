import React from "react";
import s from "./Pokemon.module.css";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  return (
    <Link to={`/About/${pokemon.id}`} className={s.pokemonCard}>
      <div className={s.insideBlock}>
        <div className={s.pokemonName}>{pokemon.name.toUpperCase()} </div>
      </div>
      <img className={s.pokStyle} src={pokemon.image} alt="" />
    </Link>
  );
};

export default PokemonCard;
