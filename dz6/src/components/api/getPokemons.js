import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/";

export const fetchPokemons = async () => {
  try {
    const { data } = await axios.get(BASE_URL + "pokemon?limit=20&offset=24");
    const pokemonList = await Promise.all(
      data.results.map(async (pokemon) => {
        const response = await axios.get(pokemon.url);
        return {
          id: response.data.id,
          name: response.data.name,
          image: response.data.sprites.front_default,
        };
      })
    );
    return pokemonList;
  } catch (error) {
    console.log(error);
  }
};
