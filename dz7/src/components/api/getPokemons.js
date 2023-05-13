import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/";

export const fetchPokemons = async (limit, offset, generations) => {
  try {
    const generationParam = generations
      ? `&generation=${generations.join(",")}`
      : "";
    const { data } = await axios.get(
      BASE_URL + `pokemon?limit=${limit}&offset=${offset}${generationParam}`
    );
    const pokemonList = await Promise.all(
      data.results.map(async (pokemon) => {
        const response = await axios.get(pokemon.url);
        return {
          id: response.data.id,
          name: response.data.name,
          image: response.data.sprites.other["official-artwork"].front_default,
          level: response.data.base_experience,
          attack: response.data.stats[1].base_stat,
          speed: response.data.stats[5].base_stat,
          weight: response.data.weight,
        };
      })
    );
    return pokemonList;
  } catch (error) {
    console.log(error);
  }
};
